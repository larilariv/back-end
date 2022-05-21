const User = require("../models/user-model");

const seedData = require("./user-seeds.json");

User.deleteMany({})
  .then(() => {
    return User.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
