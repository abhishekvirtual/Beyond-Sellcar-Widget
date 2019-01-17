import { model, Schema } from 'mongoose';

// All validation should be handled in the controller
// keep models as minimal and simple as possible

const PostSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  title: String,
  slug: String,
  content: String,
  featuredImage: String,
  category: String,
  published: Boolean,
});

export const Post = model('Post', PostSchema);
