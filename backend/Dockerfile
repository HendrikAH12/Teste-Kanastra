FROM python:3.8.10-slim

WORKDIR /backend
COPY . /backend

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

WORKDIR /app
COPY app .

EXPOSE 8000
