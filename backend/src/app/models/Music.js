import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

class MusicModel {
  schema() {
    const musicSchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        cover: {
          type: String,
          required: true,
        },
        release: {
          type: Date,
          required: true,
        },
      },
      { timestamps: true }
    );

    musicSchema.plugin(paginate);

    return mongoose.model('Music', musicSchema);
  }
}

export default new MusicModel().schema();
