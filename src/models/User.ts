import mongoose from 'mongoose';
import paginate from '../config/mongoose-paginate';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    birth: { type: Date },
    password: { type: String, select: false },
    active: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.plugin(paginate);

export default mongoose.model('User', UserSchema);
