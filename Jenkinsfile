pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t webapp-project .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    docker rm -f webapp-container || true

                    docker run -d \
                    --name webapp-container \
                    -p 3000:3000 \
                    webapp-project
                '''
            }
        }
    }

    post {
        success {
            echo 'Application successfully deployed using Docker!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
