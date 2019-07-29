pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
        environment {
        CI = 'true' 
    }

    stages {
        stage('Install') { 
            steps {
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
                sh 'ls /var/jenkins_home/workspace/gara-developer-console@tmp'
                sh 'chmod +x /var/jenkins_home/workspace/gara-developer-console/scripts/deploy-int.sh'
                sh '/var/jenkins_home/workspace/gara-developer-console/scripts/deploy-int.sh'
            }
        }
    }
}