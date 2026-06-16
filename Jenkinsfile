pipeline {
    agent {
        docker {
            image 'docker:latest'
            // Gắn file socket vào agent để nó ra lệnh ra bên ngoài máy Mac
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling code from repository...'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo '🚀 Start Building Docker Image...'
                // Không cần dùng chmod nữa, chạy trực tiếp script build của bạn
                sh 'sh ./scripts/docker-build.sh'
            }
        }
    }
    post {
        failure {
            echo '❌ CI/CD failed. Please check logs!'
        }
    }
}