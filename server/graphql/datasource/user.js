import { MongoDataSource } from "apollo-datasource-mongodb";

export class Users extends MongoDataSource {
  getUserById(userId) {
    return this.findOneByuserId(userId);
  }
  getAllUsers() {
    return this.model.find();
  }
}
