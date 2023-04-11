import db from "../db/connection.js";
import Ballers from "../models/baller.js";
import bballs from "./Bball.json" assert { type: "json" };


const insertData = async () => {
  // Reset Database
  await db.dropDatabase();
  
  await Ballers.insertMany(bballs);
  // Insert Ballers into the Database
  
  // Close DB connection
  db.close();
};

insertData();
