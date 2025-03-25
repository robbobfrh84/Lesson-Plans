# Lake Merrit Birds
- `cd Lake\ Merritt\ Birds` 
- Start / Check mongo server `mongod --dbpath ~/data/db` - `mongosh` - `exit()`
New Terminal Tab (Server Tab)
- `cd server`
- `npm install`
- `npm run seed all` (*first time only) 
- `npm start `
  - Now, browser at `http://localhost:3000/api/birds` for api
  - OR: `http://localhost:3000/info`
  New Terminal Tab (Client Tab)
- `..cd /client`
- `npm install`

Seed commands
- `npm run seed all` Removes any database seeds with seed.js's `const seedBirds`
- `npm run seed delete` Just deletes all seeds('Birds') from db. 

# To Do
ChatGPT Guide: https://chatgpt.com/c/67dadc1c-7c28-8002-80f9-5f9bd314fcd4
- Finish copy/pasting all file content from chatGPT
- Scroll to bottom to see code to **add update and delete bird** to front end.

# Resources
Common Birds of Lake Merritt
- https://inkart.net/product/common-birds-of-lake-merritt-in-oakland/

KTS MERN app
- https://github.com/robbobfrh84/react-stacks/tree/main/KTS