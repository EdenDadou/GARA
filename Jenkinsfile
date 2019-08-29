pipeline {
    agent none
    environment {
        CI = 'false' 
    }

    stages {
        stage('Install') { 
        
            agent { docker 'node:10.16-alpine'     }


            steps {
                sh 'npm -v'
                sh 'node -v'

            }
        }

        stage('Build') { 
        
            agent { docker 'node:10.16-alpine'     }
            steps {
                sh 'npm rebuild node-sass'
                sh 'npm install'
                sh 'npm run build' 
                sh 'cp -R build/* /home'
                sshPublisher(publishers: [sshPublisherDesc(configName: 'vm-int', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'sudo cp -R /var/jenkins_home/workspace/gara-developer-console/build/* /home/nginx/console/', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/nginx/console/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '/var/jenkins_home/workspace/gara-developer-console/build/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
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