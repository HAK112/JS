function addition(){    
    let a = document.getElementById("val1");
    let b = document.getElementById("val2");
    let res=parseInt(a.value)+parseInt(b.value);
    document.getElementById("result").innerHTML="Result: "+res;
}
    
function subtraction(){
    let a = document.getElementById("val1");
    let b = document.getElementById("val2");
    let res=parseInt(a.value)-parseInt(b.value);
    document.getElementById("result").innerHTML="Result: "+res;
}
        
function multiplication(){
    let a = document.getElementById("val1");
    let b = document.getElementById("val2");
    let res=parseInt(a.value)*parseInt(b.value);
    document.getElementById("result").innerHTML="Result :"+res;
}        
            
function division(){
    let a = document.getElementById("val1");
    let b = document.getElementById("val2");
    let res=parseInt(a.value)/parseInt(b.value);
    document.getElementById("result").innerHTML="Result: "+res;
}

function letMeCallYou()
{
    alert("Bazinga!!!  you called letMeCallYou");
}