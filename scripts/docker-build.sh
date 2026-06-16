#!/bin/bash

# Định nghĩa các biến cấu hình tên và tag
IMAGE_NAME="crm"
TAG="1"

echo "============= 🚀 BUILD DOCKER ============="

# Bước 1: Thực hiện build image mới
echo "-> Create new image named ${IMAGE_NAME}:${TAG}..."
docker build -t ${IMAGE_NAME}:${TAG} .

# Kiểm tra xem lệnh docker build có thành công hay không
if [ $? -eq 0 ]; then
    echo "Result: ✅ Build image ${IMAGE_NAME}:${TAG} successfully!"

    echo "-> Docker spaces:"
    docker system df

    # Bước 2: Dọn dẹp các layer rác và dangling image cũ tự động
    echo "-> Cleaning up Build Cache..."
    docker builder prune -a -f

    echo "-> Cleaning up Dangling Images..."
    docker image prune -f

    echo "-> Docker spaces:"
    docker system df

    echo "-> Remove old container if exists..."
    docker rm -f ${IMAGE_NAME}-web 2>/dev/null || true

    echo "-> Create container:"
    docker run -d -p 0.0.0.0:80:80 --name ${IMAGE_NAME}-web ${IMAGE_NAME}:${TAG}

    echo "============= 🎉 All done and ready to run! ============="
else
    echo "Result: ❌ Build image ${IMAGE_NAME}:${TAG} failed!"
    exit 1
fi