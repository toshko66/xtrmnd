
# Project Name
XTRMND

## React Vite App with Docker
This project is a React Vite application that fetches user data from an API endpoint and displays it as cards. The fetching, error handling, and loading state management are handled by a custom hook /useFetchUsers. The development and production environments are containerized using Docker to ensure consistency across different environments.

#### Run the app **Local Development**

1. git clone https://github.com/toshko66/xtrmnd
2. npm install
3. npm run dev


#### RUN Docker by following the steps below
 1. docker build -t my-react-app .  (name of the app can be changed)

 2. docker run -p 5173:5173 my-react-app 

 3. Acces you dockerized app at http://localhost:5173
#### OR run
    
 1.   docker-compose up

<!-- You have to open docker desktop enginge on the background -->

### I welcome any feedback or suggestions for improvements and am open to discussing any necessary changes. 

