# Content Management System API Application Documentation

This API is built with Node.js, Express, and MongoDB. It provides endpoints for managing users, posts, and comments.

## Setup

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm run dev` for development mode.

## API Endpoints

### Users

- **POST /api/v1/users/register**

  Creates a new user.

  Sample request body:
  ```json
  {
  "username": "Hom Dahal",
  "email": "admin@gmail.com",
  "password": "0000aabbcc",
  "isAdmin": false
  }
  ```

- **GET /api/v1/users**

  Retrieves all users.

- **GET /api/v1/users/:id** <br>
  Retrieves a user by ID. <br>
  6678999fe624af8416fae276 <br>

- **PUT /api/v1/users/:id** <br>
  Updates a user by ID. <br>
  6678999fe624af8416fae276 <br>

  Sample request body: type allowed 
  ```json
  {
    "username": "Hom Dahal",
    "email": "admin@gmail.com",
    "password": "0000aabbcc",
    "isAdmin": false
  }
  ```

- **DELETE /api/v1/users/:id** <br>
  Deletes a user by ID. <br>
  66785e71142939b496c1f397 <br>

### Posts

- **POST /api/v1/posts** <br>

  Creates a new post.

  Sample request body:
  ```json
  {
    "title": "Sample Post Title",
    "content": "This is the content of the sample post.",
    "user": "66773ce752abd6506c4db2fa",
    "image_url": "http://example.com/sample-image.jpg"
  }
  ```

- **GET /api/v1/posts** <br>
  Retrieves all posts.

- **GET /api/v1/posts/:id** <br>
  Retrieves a post by ID. <br>
  667b16fd124e4292a0334cea <br>

- **PUT /api/v1/posts/:id** <br>
  Updates a post by ID. <br>
  66625504d355481d14a02aeb <br>

  Sample request body:
  ```json
  {
     "title": "Post Title",
    "content": "Post content...",
    "author_id": "60d2fa2f8b3d8a3f8f8b21a2",
    "image_url": "https://placehold.co/600x400"
  }
  ```

- **DELETE /api/v1/posts/:id** <br>
  Deletes a post by ID. <br>
  66625504d355481d14a02aec <br>

### Comments

- **POST /api/v1/comments**

  Creates a new comment.

  Sample request body:
  ```json
  {
     "post_id": "60c72b319b1e8b001c8e4c0e", 
    "author_id": "60c72b2f9b1e8b001c8e4c0d",  
    "content": "Great post!"
  }
  ```

- **GET /api/v1/comments** <br>
  Retrieves all comments. <br>

- **GET /api/v1/comments/:id** <br>
  Retrieves a comment by ID. <br>
  66625504d355481d14a02af9 <br>

- **PUT /api/v1/comments/:id** <br>
  Updates a comment by ID. <br>
    667b320ee624af8416fae6db <br>
  Sample request body: <br>
  ```json
  {
    "post_id": "667a0467e624af8416fae5ec", 
    "user_id": "66773ce752abd6506c4db2fa",  
    "content": "Great post!"
  }
  ```

- **DELETE /api/v1/comments/:id** <br>
  Deletes a comment by ID. <br>
  667b32cee624af8416fae6df 
