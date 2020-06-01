const {CarOwner} = require('../model');
const filters = [
    {
        "id": 1,
        "start_year": 1991,
        "end_year": 2009,
        "gender": "male",
        "countries": ["Brazil", "Ireland", "Egypt", "Poland", "Niger", "Greece", "Peru"],
        "colors": ["Green", "Violet", "Yellow", "Blue"]
    }, {
        "id": 2,
        "start_year": 1990,
        "end_year": 2010,
        "gender": "",
        "countries": ["Russia", "Portugal", "Vietnam", "Croatia", "Uganda", "Iran"],
        "colors": ["Teal", "Maroon", "Red"]
    }, {
        "id": 3,
        "start_year": 2001,
        "end_year": 2009,
        "gender": "female",
        "countries": [],
        "colors": ["Red", "Aquamarine", "Orange", "Mauv"]
    }, {
        "id": 4,
        "start_year": 1990,
        "end_year": 2000,
        "gender": "",
        "countries": ["United States"],
        "colors": []
    }, {
        "id": 5,
        "start_year": 2000,
        "end_year": 2009,
        "gender": "",
        "countries": ["Myanmar", "South Africa", "Nicaragua", "Finland", "Cuba", "Mexico"],
        "colors": []
    }
]

class carOwnerService{
     
    static titleCase(str) {
        return str.split(' ').map(function (val) {
            return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
        }).join(' ');
    }
    static async filter(index){
        try{
            let query = {};
            if(filters[index].gender){
                query.gender = this.titleCase(filters[index].gender);
            }
            if (filters[index].countries.length > 0) {
                query.country = {
                    $in: filters[index].countries
                }
            }
            if (filters[index].colors.length > 0) {
                query.carColor = {
                    $in: filters[index].colors
                }
                query.carModelYear = {
                    $gte: filters[index].start_year,
                    $lte: filters[index].end_year
                }

            }
        const result = await CarOwner.find(query);
        return result;
    }
    catch(error){
        throw error;
    }
    }

    static getFilters(){
       return filters;
    }

}

module.exports = carOwnerService;