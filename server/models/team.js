const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: String,
  users: [
    
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.model('Team', teamSchema);
