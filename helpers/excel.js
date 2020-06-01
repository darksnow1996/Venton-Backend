//const xlsxFile = require('read-excel-file/node');
const csv = require('csv-parser');
const fs = require('fs');
//const neatCsv = require('neat-csv');
const {CarOwner} = require('../model');

let dataArray = [];

const users = [];
const rows = ()=> {
    fs.createReadStream('./public/car_ownsers_data.csv')
    .pipe(csv())
    .on('data', (row) => {
        const user = {
      id:row.id,
         firstname:row.first_name,
         lastname:row.last_name,
         email:row.email,
         country:row.country,
         carModel:row.car_model,
         carModelYear:row.car_model_year,
         carColor:row.car_color,
         gender:row.gender,
         jobTitle:row.job_title,
         bio:row.bio
     }
      users.push(user);

    })
    .on('end', () => {
       CarOwner.create(users);
        console.log('CSV file successfully processed');
    });

  //  console.log(users);
    //return users;
}

function returnRow(rows){
   console.log(rows);
}

// const rows =  ()=> {fs.readFile('./public/car_ownsers_data.csv', async (err, data) => {
//     if (err) {
//         console.error(err)
        
        
//     }

//     const row = await neatCsv(data);
//     const user = {
//         id:row.id,
//         firstname:first_name
//     }
//     users.push(user);
//    // const row = await neatCsv(data);;
 
// });
// return users

// }

    


//const rows = async()=> {return await xlsxFile('./car_ownsers_data.csv');}



module.exports = rows;

