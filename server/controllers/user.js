const User = require('../models/user')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().exec()
        if(!users){
            return res.status(404).json({ message: "Users not find go and create one.." })
        }
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec()
        if(!user){
            return res.status(404).json({ message: "User not find" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.createUser = async (req, res) => {
    const user = new User(req.body)

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
