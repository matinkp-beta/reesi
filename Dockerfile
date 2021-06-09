FROM dockerhub.ir/python:3.7.9

WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y cmake && apt-get install ffmpeg libsm6 libxext6  -y 
RUN pip install django
RUN pip install opencv-python
COPY framemaker  .
COPY .git .
EXPOSE 8000
CMD python framemaker/manage.py runserver




