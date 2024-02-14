# Get Java 19 image
FROM openjdk:19

# Build the project by using mvnw executable file
CMD ["./mvnw clean install"]

ARG JAR_FILE=./target/labreport-0.0.1.jar

# Copy the builded .jar file into docker
COPY ${JAR_FILE} ./labreport-0.0.1.jar

# Run the application
ENTRYPOINT ["java","-jar","/labreport-0.0.1.jar"]

# Expose the port that your application will run on
EXPOSE 8080
