pipeline {
    agent none
    environment {
        CI = 'true' 
    }

    stages {
        stage('Install') { 
        
            agent { docker 'node:6-alpine'  args '-v /home/nginx/console:/home -p 3000:3000'     }
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            agent { docker 'node:6-alpine'  args '-v /home/nginx/console:/home -p 3000:3000'     }
            steps {
            
                sh 'npm test' 
            }
        }
        
        stage('Build') { 
            agent { docker 'node:6-alpine'  args '-v /home/nginx/console:/home -p 3000:3000'     }
            steps {
            
                sh 'npm run build' 
            }
        }
        
        stage('Deploy') { 
            agent { docker 'node:6-alpine'  args '-v /home/nginx/console:/home -p 3000:3000'     }
            steps {
                sh 'cp -R dist/* /home' 
            }
        }
        
        stage('Sonarqube analysis') {
           agent {     docker   'maven:3-alpine'    args '-v /root/.m2:/root/.m2' }
  
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