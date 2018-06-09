let express    = require('express');
let router     = express.Router();
let middleware = require('../middlewares/index');
//let indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
      
    res.end(middleware.calcular(req, res));
    
    
});

module.exports = router;