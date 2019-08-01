pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-v /tmp:/tmp'
            args '-p 3000:3000' 
        }
    }
        environment {
        CI = 'true' 
    }

    stages {
        stage('Install') { 
            steps {
                touch '/tmp/azeiodfsihqznlkdsqjfn'
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
        
        
        
        stage('Deploy') {

            steps {
                sh 'ls'
                sh '$(pwd)'
            }
        }

    }
}