using DAL.Repositories.Abstract;
using DAL.Repositories.Concrete;
using DAL.Services.Abstract;
using DAL.Services.Concrete;
using Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NotificationJobsLibrary.Services.Abstract;
using NotificationJobsLibrary.Services.Concrete;
using System;
using System.Text;
using Microsoft.Extensions.Hosting;
using NotificationJobs.Services;

namespace WebApi.Helpers
{
    public class ServicesHelper
    {
        private readonly IServiceCollection services;
        private readonly IConfiguration configuration;

        public ServicesHelper(IServiceCollection services, IConfiguration configuration)
        {
            this.services = services;
            this.configuration = configuration;
        }
        
        public void ConfigureAuthServices()
        {

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
           .AddJwtBearer(x =>
           {
               x.RequireHttpsMetadata = false;
               x.SaveToken = true;
               x.TokenValidationParameters = new TokenValidationParameters
               {
                   ValidateIssuerSigningKey = true,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration.GetSection("JWTConfig").GetValue<string>("Secret"))),
                   ValidateLifetime = true,
                   ValidateIssuer = false,
                   ValidateAudience = false
               };
           });
        }

        public void ConfigureSettings()
        {
            var jwtConfig = configuration.GetSection("JWTConfig");
            services.Configure<JWTConfig>(jwtConfig);

            var emailConfig = configuration.GetSection("EmailConfig");
            services.Configure<EmailConfig>(emailConfig);

            var smsConfig = configuration.GetSection("SMSConfig");
            services.Configure<SMSConfig>(smsConfig);

            var jobsConfig = configuration.GetSection("JobsConfig");
            services.Configure<JobsConfig>(jobsConfig);
        }

        public void ConfigureServices()
        {
            services.AddScoped<IJWTService, JWTService>();
        }

        public void ConfigureRepositories()
        {
            services.AddScoped<IAuctionRepository, AuctionRepository>();
            services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();
            services.AddScoped<IJobsRepository, JobsRepository>();
            
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<ISMSService, SMSService>();

            services.AddSingleton<IHostedService, SmsNotificationsService>();
        }
    }
}
