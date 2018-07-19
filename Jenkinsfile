node {
        stage('pwd')
        {
            sh 'pwd'
        }
        
        stage('analyze') {
  
              sh 'echo "`pwd`/Dockerfile" > anchore_images'
                anchore name: 'anchore_images'
            
}
  
}
