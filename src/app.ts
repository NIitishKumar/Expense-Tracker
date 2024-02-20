import express from 'express';
import User from './model/user.model';
import sequelize from "./connection/connection";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.ts

async function createUser() {
  await sequelize.sync(); // Sync all defined models to the database (creates tables if they don't exist)
  
  const user = await User.create({
    username: 'john_doe',
    email: 'john@example.com',
  });

  console.log('User created:', user.toJSON());
}

createUser();


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
