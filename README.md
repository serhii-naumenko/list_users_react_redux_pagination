# React + Redux list of Users

Stack: React, React hooks, Redux, Fetch, API.
Rendering list of users with pagination.
[DEMO LINK](https://serhii-naumenko.github.io/redux_react_list_pag/)

Task conditions:

1. Get all users by request from the server and display them with a pagination of 5 users. Each user must contain: First name, Last name, Description (name, surname, desc).
2. Implement a form for creating users.
3. Create a user by sending data to the server and display the received (updated) response in the list of users.
4. Implement the ability to delete and edit a user by sending data to the server.
5. Write the received data to Redux.

API:

1. Get all users: GET http://23.88.43.148/users
2. User creation: POST http://23.88.43.148/users
3. Editing a user: PUT http://23.88.43.148/user/19 (19 is the user_id of the user being edited)
4. Deleting a user:
5. DELETE http://23.88.43.148/user/20 (20 is the user_id of the user to be deleted)

Installing
• Fork and clone this repository
• Run npm install in your terminal
• Run npm start
