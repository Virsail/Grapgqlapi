# Grapgqlapi
 GraphQL Api for AccessAfya  
# Author
[virsail mbagaya](https://github.com/virsail)  
  
# Description  
A GraphQL endpoint for Access Afya analytics platform built on Javascript that will  allow the product Front End to access specific data points.

##  Live Link  
 View App site [View Site](https://accessafyagraphqlendpoint.herokuapp.com/graphql)  
  

## Instance Screenshot 
![Screenshot from 2021-06-28 03-14-39](https://user-images.githubusercontent.com/66640798/123563758-1078a700-d7bf-11eb-9fdb-e0d71f0f96d6.png)

  
## Setup and Installation  
##### Installing Node:  
 ```
 Install and verify node versions (respectively)
 sudo apt install nodejs
 node -v
```
##### Create and Navigate into the project directory (Linux Ubuntu Shell)
 ```
mkdir ..(project name)
cd ..(project name)
```
##### Install package.json 
 ```
 npm init
```  

 ##### Define data structure in Schema folder
##### Define Port number (where yu want the application to run)
 ```in the main application file 
 const PORT = process.env.PORT  || (your port number);
``` 
##### Define root query
##### Run the application
 ```
 npm start
```
Open the application on your browser `localhost:(your port number)/graphql(as defined)`.  
  
  
## Technology used  
  
*   Javascript
* [Heroku](https://heroku.com)  (deployment)
  
  
## Contact Information   
virsaileric@gmail.com
  

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) 
* Copyright (c) 2021 **Virsail Mbagaya**
