# frontend/Dockerfile

# 1. Base image olarak Node.js LTS sürümünü kullanıyoruz
FROM node:18-alpine AS base

# 2. Çalışma dizinini ayarlıyoruz
WORKDIR /app

# 3. package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# 4. Projenin bağımlılıklarını yüklüyoruz
RUN npm install

# 5. Proje dosyalarını kopyalıyoruz
COPY . .

# 6. Uygulamayı derliyoruz
RUN npm run build

# 7. Kullanılacak portu belirtiyoruz
EXPOSE 3000

# 8. Uygulamayı başlatıyoruz
CMD ["npm", "start"]
