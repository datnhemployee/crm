pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Jenkins sẽ tự động pull code từ Git về nếu bạn cấu hình Git ở bước sau
                echo 'Pulling code from repository...'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🚀 Start Building Docker Image...'
                // Thêm lệnh chmod trực tiếp cho file socket ngay bên trong container Jenkins
                sh 'chmod 666 /var/run/docker.sock'
                // Chạy chính cái file build script của bạn tự động bên trong Jenkins
                sh 'sh ./scripts/docker-build.sh'
            }
        }

        stage('Test & Verify') {
            steps {
                echo 'Checking if container is running...'
                sh 'docker ps | grep crm-web'
            }
        }
    }
    
    post {
        success {
            echo '✅ CI/CD completed successfully!'
        }
        failure {
            echo '❌ CI/CD failed. Please check logs!'
        }
    }
}