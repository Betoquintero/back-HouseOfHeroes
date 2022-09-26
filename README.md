# Project's name REST API

## Description

This is a the backend repository for the React application `House of Heroes`.

---

## Instructions

When cloning the project, change the <code>sample.env</code> file name for <code>.env</code>. The project will run on **PORT 8000**.

Then, run:

```bash
npm install
```

## Scripts

- To start the project run:

```bash
npm run start
```

- To start the project in development mode, run:

```bash
npm run dev
```

- To seed the database, run:

```bash
npm run seed
```

---

## Models

- User
- Collection
- Comment
- Event 
- Issue
- Part

### User

Users in the database have the following properties:

```js
{  
  "email": String,
  "hashedPassword": String
  "username": String,
  "imageUrl": String
  "role":String  
}


```

### Collection

Stored in each user profile and will change depending on each user

```js
{    
    "userId": String,
    "issues": [],
    "events": [],   
}


```

### Comment

A comment section for each part, event and issue individually

```js
{    
    "comment": String,
    "issue_Id": String,
    "userId": String,   
}


```

### Event

Each event is part of a PART and has ISSUES

```js
{    
    "universe": String,
    "name": String,
    "order": String,
    "years": String,
    "previousEvent": String,
    "nextEvent": String,
    "image": String,
    "complementaryImages": String,
    "issues": [],
    "description": String,
    "summary": String,   
}


```

### Issue

Issues are part of the database 

```js
{    
    "universe": String,
    "name": String,
    "order": String,
    "partOf": String,
    "years": String,
    "image": String,
    "complementaryImages": String,    
    "description": String,
    "summary": String,   
}


```

### Part

Part is the global container for events and issues

```js
{    
    "universe": String,
    "name": String,
    "order": String,    
    "years": String,
    "events": [],
    "issues": [],   
    "description": String,    
}


```

---

## API endpoints and usage

| Action             | Method | Endpoint            | Req.body                      | Private/Public |
| ------------------ | ------ | ------------------- | ----------------------------- | -------------- |
| SIGN UP user       | POST   | /api/v1/auth/signup | { username, email, password } | Public         |
| LOG IN user        | POST   | /api/v1/auth/login  | { email, password }           | Public         |
| GET logged in user | GET    | /api/v1/auth/me     |                               | Private        |
| Profile page       | POST   | /api/v1/auth/signup | { username, email, password } | Public         |

Show DC page GET /api/v1/dc/  
Show all DC parts GET /api/v1/dc/parts
Show DC part detail GET /api/v1/dc/parts/:part
Show all DC events GET /api/v1/dc/events
Show DC event detail GET /api/v1/dc/events/:event
Show all DC issues GET /api/v1/dc/issues
Show DC issue detail GET /api/v1/dc/issues/:issue
Show Marvel page GET /api/v1/marvel/
Show all Marvel parts GET /api/v1/marvel/parts
Show Marvel part detail GET /api/v1/marvel/parts/:part
Show all Marvel events GET /api/v1/marvel/events
Show Marvel event detailGET /api/v1/marvel/events/:event
Show all Marvel issues GET /api/v1/marvel/issues
Show DC issue detail GET /api/v1/dc/issues/:issue
Show Login Page GET /api/v1/auth/login
Show Signup page GET /api/v1/auth/signup
Show User profile GET /api/v1/profile/:userId
Delete User profile DELETE /api/v1/profile/delete/:userId
Show profile edit page GET /api/v1/profile/edit-profile/:userId
Edit User profile PUT /api/v1/profile/edit-profile/:userId
Show create event page GET /api/v1/dc/events/create-event
Create an event POST /api/v1/dc/events/create-event
Show Edit event page GET /api/v1/dc/events/create-event/:event
Edit an Event PUT /api/v1/dc/events/create-event/:event

---

## Useful links

- [Presentation slides]()
- [Frontend repository]()
- [Frontend deploy]()
- [Deployed REST API]()
