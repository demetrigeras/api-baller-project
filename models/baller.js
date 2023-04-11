import mongoose from "mongoose";

const Schema = mongoose.Schema

let teams = new Schema({
    "city": String,
    "full_name": String,

})


let ballplayers = new Schema({
    "first_name": String,
    "last_name": String,
    team: [teams]

})


export default mongoose.model("bballers", ballplayers);