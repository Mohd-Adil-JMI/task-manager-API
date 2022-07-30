# TasK Manager REST API
## Tech Stack
- Node Js
- Express
- MongoDB
# Environment Variables
``SENDGRID_API_KEY=YOURS_SENDGRID_API_KEY
JWT_SECRET=SECRED_KEY_FOR_JWT
MONGODB_URL=MONGODB_SERVER_URL
PORT=3000``
# API Docs
### User Routes
#### Authorization Header
`Bearer <token>`
| USE | PATH | METHOD | REQUEST BODY | STATUS
| ------ | ------ | ------ | ------ | ------ |
| CREATE | /users | POST | name,email,password | CREATED |
| LOGIN | / users/login | POST | email,password | OK |
| LOGOUT | /users/logout | POST |  | OK |
| LOGOUT ALL | /users/logoutall | POST |  | OK |
| READ PROFILE | /users/me | GET |  | OK |
| UPLOAD AVATAR | /users/me/avatar | POST | avatar(file)  | OK |
| DELETE AVATAR | /users/me/avatar | DELETE |   | OK |
| UPDATE USER | /users/me | PATCH | name,email,password,age | OK |
| DELETE USER | /users/me | DELETE |  | OK |

### Task Routes
#### Authorization Header
`Bearer <token>`
| USE | PATH | METHOD | REQUEST BODY | PARAMS | STATUS |
| ------ | ------ | ------ | ------ | ------ | ------ |
| CREATE TASK | /tasks | POST | description,completed |  | CREATED |
| READ TASKS | /tasks | GET |  | sortBy,completed,limit,skip | OK |
| READ TASK | /tasks/:id | GET |  |  | OK |
| UPDATE TASK | /tasks/:id | PATCH | description,completed |  | OK |
| DELETE TASK | /tasks/:id | DELETE |  |  | OK |


  
