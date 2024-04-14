const fInput = document.getElementById('firstInput');
const sInput = document.getElementById('secondInput');
const re = document.getElementById('show');
const btn = document.getElementById('addInput');
const opeInput = document.getElementById('ope');


btn.addEventListener('click', resultsInfo)

function resultsInfo(){
    if(fInput.value == '' || sInput.value == ''){
        re.innerHTML= `All filled are required!`;
    }else{
        switch(opeInput.value){
            case "+":  
            result = `${Number (fInput.value) + Number (sInput.value)}`;
            re.innerHTML= `Result is: ${result}`;
            break;
            case "-":  
            result = `${Number (fInput.value) - Number (sInput.value)}`;
            re.innerHTML= `Result is: ${result}`;
            break;
            case "*":  
            result = `${Number (fInput.value) * Number (sInput.value)}`;
            re.innerHTML= `Result is: ${result}`;
            break;
            case "/":  
            if(sInput.value==0){
                result = "Sorry, 0 can't be divisor!";
            re.innerHTML=result;
            } else{
                result = `${Number (fInput.value) / Number (sInput.value)}`;
            re.innerHTML= `Result is: ${result}`;
            }
            break;
            default: result = "Please insert an operator!";
            re.innerHTML=result;
        
        } 
    }
    fInput.value ="";
    sInput.value ="";
    opeInput.value = "";
}

