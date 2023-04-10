import fetch from "node-fetch"
import fs from "fs";

fetch('https://www.balldontlie.io/api/v1/players')
    .then((response) => response.json())
    .then((json) => {
        fs.writeFile('Bball.json', JSON.stringify(json), (err) => {
            if (err) {
                throw new Error('Something went wrong writing the file.')
            }
            console.log('JSON written to file. Contents:', JSON.stringify(json));
        })
    })