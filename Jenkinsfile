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
                sh 'cp -R dist/* /home' 
            }
        }
        
        stage('Sonarqube analysis') {
            tools {
                   jdk "jdk8"
            }
            steps {
                script {
                    scannerHome = tool 'SonarQube Scanner';
                }
                withSonarQubeEnv('sonar') {
                        sh "${scannerHome}/bin/sonar-scanner" 
                }

            }
        }


    }
}