FROM maven:3.8.7-openjdk-17 AS build

RUN mvn clean install

# Get Java 19 image
FROM openjdk:19

ARG JAR_FILE=./target/labreport-0.0.1.jar

# Copy the builded .jar file into docker
COPY ${JAR_FILE} ./labreport-0.0.1.jar

# Run the application
ENTRYPOINT ["java","-jar","/labreport-0.0.1.jar"]

# Expose the port that your application will run on
EXPOSE 8080
