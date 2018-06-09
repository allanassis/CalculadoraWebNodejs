let numbers   = [1,2,3,4,5,6,7,8,9,0];
let expressao = "";


$('document').ready(function(){

    $(".btn").click(function(){

        if(this.value != '=' && this.value != 'limpar' && this.value != 'limpar_tudo')
        {
            if(this.value in numbers || this.value == '.')
            {            
                expressao = expressao.concat(this.value);
                $("#display").text(expressao);

            }else
            {     
                expressao = expressao.concat(" " + this.value + " ");
                $("#display").text(expressao);
            }
        }
        else if(this.value == "limpar"){

            if(expressao[expressao.length -1] == " ")
            {
                expressao = expressao.substr(0, expressao.length - 3);
                $("#display").text(expressao);                
            }
            else{

                expressao = expressao.substr(0, expressao.length - 1);                                
                $("#display").text(expressao);
            }
        }
        else if(this.value == "limpar_tudo"){

            limparDisplay();
        }
        else{
            
            console.log(expressao);
            console.log(expressao.replace(/ /g, "_"));
            calcular(expressao.replace(/ /g, "_"));
        }
    })
})

function limparDisplay () {

    $("#display").text("");
    expressao = "";

}

function calcular (expressaoAjax) {

    let dados = {
            expressaoAjax : expressaoAjax
        }
    
    $.ajax({

      url    : '/calcular',
      data   : dados,      

      success:function(data){          

        limparDisplay();
        $("#display").text(data);
        expressao = expressao.concat(data);

        }
    })
}