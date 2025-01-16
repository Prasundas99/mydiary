# mydiary
A Personal diary webapp where user can write their own things uniquely

# Demo
Legacy (React version): https://mydiary-mern.netlify.app/login
Branch : https://github.com/Prasundas99/mydiary/tree/legacy

Current (sveleteKit version): https://mydiary-svelte-jualjge75-withcleverworldgmailcoms-projects.vercel.app/auth/login

## Features

- Users can create an account and log in.
- User can view all entries to their diary.
- Users can view the contents of a diary entry.
- Users can add or modify an entry.
- Users can delete an entry

## Additional Features

- Forget Password
- Email Verification


## Screenshots
![4](https://user-images.githubusercontent.com/58937669/119236876-65d5ee80-bb57-11eb-9574-ae577307e12f.png)
![2](https://user-images.githubusercontent.com/58937669/119236877-68384880-bb57-11eb-9c45-45be93a81a4d.png)
![1](https://user-images.githubusercontent.com/58937669/119236879-6a020c00-bb57-11eb-84ac-b02d92f88e32.png)

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/cloud/atlas/lp/try2-in?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347)
- [React](https://reactjs.org/) 
- Redux
- MUI


## API Endpoints

| Endpoint                    | Functionality        |
| --------------------------- | -------------------- |
| POST `/users/signup`         | Register a user      |
| POST `/users/login`          | Login a user         |
| GET `users/notes`              | Fetch all entries    |
| GET `users/notes/<Id>`    | Fetch a single entry |
| POST `users/notes`             | Create an entry      |
| PATCH `users/notes/<Id>`    | Modify an entry      |
| DELETE `users/notes/<Id>` | Delete an entry      |
| POST `reset/pass` | For Password Reset      |
| DELETE `/email-verify` | verify email      |


## Api 

For more details about the test cases and datas to pass please refer [here](https://github.com/Prasundas99/mydiary/tree/main/server/http_tests)

## Build Setup

```
# Clone repo and cd into directory
git clone https://github.com/Prasundas99/mydiary.git
```

```
# Change Direcrty
cd client || cd server

# Install dependencies
npm install

# Serve in development environment
npm run dev

# Build for production
npm run build
```



## License

- MIT
