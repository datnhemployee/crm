# FROM node:22-alpine

# WORKDIR /crm

# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npm run build 

# RUN npm i -g serve

# EXPOSE 3001

# CMD ["serve", "-s", "build", "-l", "3001"]


# === STAGE 1: Build mã nguồn ===
FROM node:22-alpine AS builder
WORKDIR /crm

# Copy package.json và cài đặt toàn bộ dependencies để phục vụ build
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code và thực hiện build thành tĩnh (Static files)
COPY . .
RUN npm run build

# === STAGE 2: Image Production chạy thực tế (Siêu nhẹ) ===
FROM nginx:1.25-alpine

# CHỈ copy thư mục đã build từ Stage 1 sang Stage 2
# Mọi node_modules và source code cồng kềnh sẽ bị bỏ lại ở Stage 1
COPY --from=builder /crm/dist /usr/share/nginx/html

# Cấu hình Nginx để handle React Router (Tránh lỗi 404 khi reload trang)
RUN echo 'server { \
    listen 80; \
    ### Cấu hình cho đường dẫn /admin/user sẽ gây lỗi vì Nginx sẽ tìm kiếm file tại /usr/share/nginx/html/admin/user, nhưng thực tế không tồn tại
    # location /admin/user { \
    ### Cấu hình cho đường dẫn gốc (/) để phục vụ ứng dụng React
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]