import Ballplayer from "../models/baller.js";

export const getBallers = async (req, res) => {
  try {
    const ballplayer = await Ballplayer.find();
    res.json(ballplayer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBaller = async (req, res) => {
  try {
    const { id } = req.params;

    const ballplayer = await Ballplayer.findOne({_id: req.params.id});
    res.json(ballplayer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getballplayername= async (req, res) => {
  try {
    const { id } = req.params;

    const ballplayer = await Ballplayer.findOne({first_name: req.params.name});
    res.json(ballplayer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const ballplayer = await Ballplayer.find({"team.full_name": req.params.id});
    res.json(ballplayer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createBaller = async (req, res) => {
  try {
    const ballerplayer = new Ballplayer(req.body);
    await ballerplayer.save();
    res.status(201).json(ballerplayer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateBaller = async (req, res) => {
  const { id } = req.params;
  const ballerplayer = await Ballplayer.findByIdAndUpdate(id, req.body);
  res.status(200).json(ballerplayer);
};

export const deleteBaller = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ballplayer.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Player Deleted!");
    }

    throw new Error("Player not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};