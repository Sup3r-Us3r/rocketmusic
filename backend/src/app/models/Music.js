import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

class MusicModel {
  schema() {
    const filenameSchema = new mongoose.Schema({
      originalName: String,
    });

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
        filename: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Filename',
        },
      },
      { timestamps: true }
    );

    musicSchema.plugin(paginate);

    return {
      musicModel: mongoose.model('Music', musicSchema),
      filenameModel: mongoose.model('Filename', filenameSchema),
    };
  }
}

export default new MusicModel().schema();
