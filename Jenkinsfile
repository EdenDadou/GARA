pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-v /home/nginx/console:/home -p 3000:3000'
        
        }
    }
        environment {
        CI = 'true' 
    }

    stages {
        stage('Install') { 
            steps {
                sh 'touch /home/azeiodfsihqznlkdsqjfn'
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
        
        stage('Build') { 
            steps {
                sh 'npm run build' 
            }
        }

    }
}