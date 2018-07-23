node {
 stage('pwd') {
            sh 'pwd'
             }
   
 stage('git') {
            git 'https://github.com/RamvigneshPasupathy/devops-dashboard.git'
              }
 stage('analyze') {
            sh 'echo "191758827001.dkr.ecr.us-east-1.amazonaws.com/sample-app `pwd`/Dockerfile" > anchore_images'
            anchore name: 'anchore_images'
            }
}
