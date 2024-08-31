# backend/Dockerfile

# Build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY webapi.csproj .
RUN dotnet restore "webapi.csproj"
COPY . .
RUN dotnet publish "webapi.csproj" -c ${BUILD_CONFIGURATION} -o /publish

# Final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "webapi.dll", "--environment=Development"]