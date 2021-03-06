﻿using System;
using System.Reflection;
using CQRS.Command.Auctions;
using DAL;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NLog.Web;
using Swashbuckle.AspNetCore.Swagger;
using WebApi.Helpers;
using WebApi.Middleware;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            NLogBuilder.ConfigureNLog("nlog.config");
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var servicesHelper = new ServicesHelper(services, Configuration);
            servicesHelper.ConfigureSettings();
            servicesHelper.ConfigureServices();
            servicesHelper.ConfigureRepositories();
            servicesHelper.ConfigureAuthServices();
            servicesHelper.ConfigureUtils();
            servicesHelper.ConfigureLogger();

            services.AddSpaStaticFiles(configuration =>
            { configuration.RootPath = "WebAppsBuild"; });

            services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<AddAuctionCommandValidator>());

            services.AddMediatR(typeof(AddAuctionCommand).GetTypeInfo().Assembly);

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "API", Version = "v1" });
            });


            servicesHelper.RunBackgroundServices();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseForwardedHeaders();
            app.Use(async (context, next) =>
            {
                if (context.Request.IsHttps || context.Request.Headers["X-Forwarded-Proto"] == Uri.UriSchemeHttps)
                {
                    await next();
                }
                else
                {
                    string queryString = context.Request.QueryString.HasValue ? context.Request.QueryString.Value : string.Empty;
                    var https = "https://" + context.Request.Host + context.Request.Path + queryString;
                    context.Response.Redirect(https);
                }
            });

            DatabaseHelper.UpdateDatabase(app);

            app.UseMiddleware<ExceptionMiddleware>();
            app.UseCors("MyPolicy");
            app.UseAuthentication();
            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
            app.UseSpaStaticFiles();

            app.Map("/admin", publicApp =>
            {
                publicApp.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "WebAppsBuild/admin";
                    spa.Options.DefaultPage = "/admin/index.html";
                });
            });

            app.Map("", publicApp =>
            {
                publicApp.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "WebAppsBuild";
                });
            });

        }
    }
}
