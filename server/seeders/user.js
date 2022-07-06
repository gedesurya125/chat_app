import { User } from '../mongooDB';
import { faker } from '@faker-js/faker';

const FAKE_COUNT = 10;

// Add singgle user
const addNewUser = async (name, age, email, role, userName, password) => {
  const newUser = new User({ name, age, email, role, userName, password });
  await newUser.save();
};

// Main Methods
export const addNewUsers = async () => {
  for (let i = 0; i < FAKE_COUNT; i++) {
    const fakeName = faker.name.findName();
    const roles = ['admin', 'user'];
    await addNewUser(
      fakeName,
      faker.datatype.number({ min: 10, max: 60, precision: 1 }),
      `${fakeName.replace(/\s/gi, '_')}@${faker.company.bsBuzz()}.com`,
      `${roles[faker.datatype.number({ min: 0, max: 1, precision: 1 })]}`,
      faker.name.lastName(),
      faker.datatype.string(10)
    );
  }
};

export const removeUsers = async () => {
  await User.deleteMany();
};
