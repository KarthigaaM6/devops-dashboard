node {
        stage('pwd')
        {
            sh 'pwd'
        }
        
        stage('analyze') {
  
              sh 'echo "docker.io/ramvignesh/devops-dashboard:latest `pwd`/Dockerfile" > anchore_images'
                anchore name: 'anchore_images'
            
}
  
}
