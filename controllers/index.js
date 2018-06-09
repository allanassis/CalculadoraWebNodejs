
let indexController = function(expressao){

    let array = expressao.split('_');
    
    console.log(array)

    while(array.length != 1){

        if(array.indexOf('/') > 0){
            
            let index  = array.indexOf('/');
            let result = Number.parseFloat(array[index - 1]) / Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());

            console.log(array);
            
        }
        else if(array.indexOf('*') > 0){

            let index  = array.indexOf('*');
            let result = Number.parseFloat(array[index - 1]) * Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());
            
            console.log(array);
        }
        else if(array.indexOf('+') > 0){

            let index  = array.indexOf('+');
            let result = Number.parseFloat(array[index - 1]) + Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());

            console.log(array);
        }
        else if(array.indexOf('-') > 0){

            let index  = array.indexOf('-');
            let result = Number.parseFloat(array[index - 1]) - Number.parseFloat(array[index + 1]);

            array.splice(index - 1, 3, result.toString());

            console.log(array);
        }
    }
    return (array[0]);
    console.log(array);
}

module.exports = indexController;