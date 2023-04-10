import mongoose from "mongoose";

const Schema = mongoose.Schema

let Bballer = new Schema({
    data: [databaller]


})

let databaller = new Schema({
    "first_name": String,
    "last_name": String,
    team: [teamballer]

})

let teamballer = new Schema({
    "city": String,
    "full_name": String,

})

export default mongoose.model("bballers", Bballer);