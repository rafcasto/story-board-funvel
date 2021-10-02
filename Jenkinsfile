pipeline{
    agent any
    stages {
        stage('Install dependencies..'){
            steps{
                sh 'yarn add --dev rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-postcss postcss'
            }
        }
        stage('Install'){
            steps{
                sh 'yarn build '
            }
        }
    }
}