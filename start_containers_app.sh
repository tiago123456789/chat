sudo docker stop mongodb \
&& sudo docker container prune \
&& sudo docker run -d --name="mongodb" -p="27017:27017" mongo