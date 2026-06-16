pipeline {
    agent any 
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling code from repository...'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo '🚀 Start Building Docker Image...'
                // Chạy trực tiếp file script build của bạn
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