# /users/register Endpoint Documentation

## Description

The `/users/register` endpoint registers a new user. It accepts user details, hashes the password, creates a user record, and returns an authentication token along with the user information.

## HTTP Method and URL

- **Method:** POST  
- **URL:** `/users/register`

## Request Body

The request payload must be in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "John",          // Required, minimum 3 characters
    "lastname": "Doe"             // Optional, if provided should be at least 3 characters
  },
  "email": "john.doe@example.com", // Required, must be a valid email and at least 5 characters long
  "password": "password123"        // Required, minimum 6 characters
}
```

## Response

### Success Response

- **Status Code:** `201 Created`
- **Content:**

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "<USER_ID>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // Additional user fields may be present.
  }
}
```

### Error Response

- **Status Code:** `400 Bad Request`
- **Content:**

```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "field_name",
      "location": "body"
    }
    // More errors if multiple validations fail.
  ]
}
```

## Notes

- The endpoint uses `express-validator` to validate inputs.
- Failing validations (e.g., invalid email, short firstname or password) will return a `400 Bad Request` status.
- Passwords are hashed using bcrypt before being saved to the database.
- A JSON Web Token (JWT) is generated upon successful registration.