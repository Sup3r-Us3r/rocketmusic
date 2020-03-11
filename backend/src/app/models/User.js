import mongoose from 'mongoose';
import { hash } from 'bcryptjs';

class UserModel {
  schema() {
    const userSchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          lowercase: true,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
          select: false,
        },
      },
      {
        timestamps: true,
      }
    );

    userSchema.pre('save', async function(next) {
      const generateHash = await hash(this.password, 10);

      this.password = generateHash;

      return next;
    });

    return mongoose.model('User', userSchema);
  }
}

export default new UserModel().schema();
