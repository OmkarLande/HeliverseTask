const Team = require('../models/team');
const User = require('../models/user');

exports.createTeam = async (req, res) => {
  const { teamName, userIDs } = req.body;

  try {
    // users exist?
    const usersExist = await User.find({ _id: { $in: userIDs } });
    if(!usersExist){
      return res.status(301).json({message: 'User Not exist'})
    }
    const team = await Team.create({ users });

    return res.status(201).json(team);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getTeamById = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await Team.findById(id).populate('users');
    if (!team) {
      return res.status(404).json({ message: 'Team not found.' });
    }

    return res.status(200).json(team);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


