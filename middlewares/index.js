let indexController = require('../controllers/index');

let middleareIndex = function(req, res){
   this.calcular   = (req, res) =>
   {
       return indexController(req.query.expressaoAjax);
    }
};

module.exports = new middleareIndex();

