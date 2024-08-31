# backend/Dockerfile

# Base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["./YourProjectName/YourProjectName.csproj", "./"]
RUN dotnet restore "YourProjectName.csproj"
COPY . .
RUN dotnet publish "./YourProjectName/YourProjectName.csproj" -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "./YourProjectName/bin/debug/net8.0/YourProjectName.dll"]
