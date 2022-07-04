import { User } from "../mongooDB";
import { faker } from "@faker-js/faker";

const FAKE_COUNT = 10;

// Local methods
const addNewUser = async (name) => {
  console.log("this is a new user", name);
  const newUser = new User({ name });
  await newUser.save();
};

// Main Methods
export const addNewUsers = async () => {
  for (let i = 0; i < FAKE_COUNT; i++) {
    const fakeName = faker.name.findName();
    await addNewUser(fakeName);
  }
  console.log("new users has been added");
};

export const removeUsers = async () => {
  await User.deleteMany();
  console.log("users has been deleted");
};
