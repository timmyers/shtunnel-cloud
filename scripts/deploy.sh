docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
docker push timmyers/shtunnel-cloud
ssh -o "StrictHostKeyChecking=no" root@tmye.me 'bash -s' < scripts/deploy_restart.sh
