# API Endpoint Documentation

---

## /users/register Endpoint

### Description

The `/users/register` endpoint registers a new user. It accepts user details, hashes the password, creates a user record, and returns an authentication token along with the user information.

### HTTP Method and URL

- **Method:** POST  
- **URL:** `/users/register`

### Request Body

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

### Response

#### Success Response

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

#### Error Response

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

### Notes

- Uses `express-validator` to validate inputs.
- Passwords are hashed using bcrypt before storage.
- A JSON Web Token (JWT) is generated upon successful registration.

---

## /users/login Endpoint

### Description

The `/users/login` endpoint authenticates a user. It verifies the provided credentials and returns an authentication token along with the user information if successful.

### HTTP Method and URL

- **Method:** POST  
- **URL:** `/users/login`

### Request Body

The request payload must be in JSON format with the following structure:

```json
{
  "email": "john.doe@example.com", // Required, must be a valid email
  "password": "password123"          // Required, minimum 6 characters
}
```

### Response

#### Success Response

- **Status Code:** `200 OK`
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

#### Error Response

- **Validation Error:**
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
        // More errors if validations fail.
      ]
    }
    ```

- **Authentication Failure:**
  - **Status Code:** `401 Unauthorized`
  - **Content:**

    ```json
    {
      "message": "Invalid email or password"
    }
    ```

### Notes

- Uses `express-validator` to validate inputs.
- Returns `400 Bad Request` if any input fails validation.
- Returns `401 Unauthorized` if either the email does not exist or the password does not match.
- On successful authentication, a JSON Web Token (JWT) is generated and returned.

# Captain API Endpoint Documentation

---

## /captain/register Endpoint

### Description

Registers a new captain by accepting captain details along with vehicle information. The endpoint creates a captain record, hashes the password, and generates an authentication token upon successful registration.

### HTTP Method and URL

- **Method:** POST  
- **URL:** `/captain/register`

### Request Body

The request payload must be in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "Jane",          // Required, minimum 3 characters
    "lastname": "Doe"             // Required, minimum 3 characters
  },
  "email": "jane.doe@example.com", // Required, must be a valid email
  "password": "password123",       // Required, minimum 6 characters
  "vehicle": {
    "color": "Red",                // Required, minimum 3 characters
    "plate": "ABC123",             // Required, minimum 3 characters
    "capacity": 4,                 // Required, integer greater than or equal to 1
    "vehicleType": "car"           // Required, must be one of: car, bus, motorcycle
  }
}
```

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Content:**

```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "<CAPTAIN_ID>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // Additional captain fields may be present.
  }
}
```

#### Error Response

- **Validation Error:**
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
        // More errors if validations fail.
      ]
    }
    ```

- **Other Errors:**
  - Errors related to missing or invalid fields will also return a `400 Bad Request` status with an appropriate error message.

### Notes

- Input is validated using `express-validator`.
- Passwords are hashed using bcrypt before storage.
- On successful registration, a JSON Web Token (JWT) is generated and returned along with the newly created captain's information.