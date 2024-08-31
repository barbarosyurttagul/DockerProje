# backend/Dockerfile

# Base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "./webapi/webapi.csproj"
RUN dotnet build "./webapi/webapi.csproj" -c Release -o /app/build

# Publish the app
FROM build AS publish
RUN dotnet publish "./webapi/webapi.csproj" -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "./webapi/bin/debug/net8.0/webapi.dll"]