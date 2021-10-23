pipeline{
    agent any
    stages {
       
        stage('Deploy Storybook')
        {
            steps
            {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
                {
                    sh 'docker stop storybook'
                    sh 'docker rm storybook'
                }
                sh 'docker run -d -p 6006:6006 --name storybook localhost:5000/react-app:latest'
            }
        }
        
    }
}