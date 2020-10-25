// const uuid = require('uuid');
const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   default: uuid
  // },
  title: String,
  order: Number
});

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: [columnSchema]
    // _id: {
    //   type: String,
    //   default: uuid
    // }
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

// class Board {
//   constructor({
//     id = uuid(),
//     title = 'Board name',
//     columns = [
//       {
//         id: uuid(),
//         title: 'Column name',
//         order: 0
//       }
//     ]
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }

//   static toResponse(board) {
//     const { id, title, columns } = board;
//     return { id, title, columns };
//   }
// }

module.exports = Board;
