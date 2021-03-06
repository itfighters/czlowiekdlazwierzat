FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
ENV ASPNETCORE_ENVIRONMENT Test
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src

COPY ["WebApi/WebApi.csproj", "WebApi/"]
COPY ["NotificationJobs/NotificationJobs.csproj", "NotificationJobs/"]
COPY ["DAL/DAL.csproj", "DAL/"]
COPY ["Infrastructure/Infrastructure.csproj", "Infrastructure/"]
COPY ["NotificationJobsLibrary/NotificationJobsLibrary.csproj", "NotificationJobsLibrary/"]
COPY ["CQRS/CQRS.csproj", "CQRS/"]
RUN dotnet restore "WebApi/WebApi.csproj"
COPY . .
WORKDIR "/src/WebApi"
RUN dotnet build "WebApi.csproj" -c Release  -o /app 

FROM build AS publish
RUN dotnet publish "WebApi.csproj" -c Release -o /app



FROM base AS final
WORKDIR /app
COPY --from=publish /app .

COPY ["WebApi/WebApps", "./WebAppsBuild"]
ENTRYPOINT ["dotnet", "WebApi.dll"]