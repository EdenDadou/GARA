pipeline {
    agent none
    environment {
        CI = 'true' 
    }

    stages {
        stage('Install and build') { 
        
            agent { docker 'node:10.16-alpine'     }


            steps {
                sh 'npm -v'
                sh 'node -v'
                sh 'npm install'
            
               
            }
        }

        stage('Build') { 
        
            agent { docker 'node:10.16-alpine'     }
            steps {
                 
                sh 'npm run build' 
            }
        }
        

        stage('Deploy') { 
            agent { docker 'node:6-alpine'     }
            steps {
                sh 'cp -R dist/* /home' 
                sshPublisher(publishers: [sshPublisherDesc(configName: 'vm-int', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'sudo cp -R /var/jenkins_home/workspace/gara-developer-console/dist/* /home/nginx/console/', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/nginx/console/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '/var/jenkins_home/workspace/gara-developer-console/dist/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
        
        stage('Sonarqube analysis') {
           agent {     docker   'maven:3-alpine'   }
  
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