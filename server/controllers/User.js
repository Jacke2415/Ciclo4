import User from "../models/User";

export const getUser = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    const cedula = req.params.cedula;
    try {
        await User.findByIdAndRemove(cedula).exec();
        res.send('Succesfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}