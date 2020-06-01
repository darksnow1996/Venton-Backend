const { carOwnerService } = require('../services');
class carOwner {
    static async getCarOwnersByFilter(req,res,next){
        try{
        const {filter} = req.query;
       
        const owners = await carOwnerService.filter(filter);
      return  res.status(200).json({
            data:{owners},
            status:200
        });

    }

catch(error){
    next(error);
}

}

static getFilters(req,res,next){
    return res.status(200).json({
        data:{
            filters:carOwnerService.getFilters()
            
        },
        status:200
    })
}
}

module.exports = carOwner;