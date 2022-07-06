import { MongoDataSource } from "apollo-datasource-mongodb";

export class BlogPosts extends MongoDataSource {
  getAllBlogPosts() {
    return this.model.find({});
  }
}
