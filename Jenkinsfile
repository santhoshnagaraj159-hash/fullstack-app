pipeline {

    agent {
        label 'linux-agent'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t fullstack-demo .'
            }
        }

        stage('Deploy') {
            steps {

                sh '''
                docker stop fullstack-demo || true
                docker rm fullstack-demo || true

                docker run -d \
                --name fullstack-demo \
                -p 3000:3000 \
                fullstack-demo
                '''
            }
        }
    }
}
