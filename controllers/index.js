
let indexController = function(expressao){

    let array = expressao.split('_');
    
    while(array.length != 1){

        if(array.indexOf('/') > 0){
            
            let index  = array.indexOf('/');
            let result = Number.parseFloat(array[index - 1]) / Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());
                      
        }
        else if(array.indexOf('*') > 0){

            let index  = array.indexOf('*');
            let result = Number.parseFloat(array[index - 1]) * Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());
            
        }
        else if(array.indexOf('+') > 0){

            let index  = array.indexOf('+');
            let result = Number.parseFloat(array[index - 1]) + Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());
            
        }
        else if(array.indexOf('-') > 0){

            let index  = array.indexOf('-');
            let result = Number.parseFloat(array[index - 1]) - Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());

        }
    }
    return (array[0]);
}

module.exports = indexController;