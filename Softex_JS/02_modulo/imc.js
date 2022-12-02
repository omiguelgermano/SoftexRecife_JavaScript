function imc(){
    var altura = 183 //parseFloat(document.getElementById("altura").value);
    var peso = 143 //parseFloat(document.getElementById("peso").value);
    
    var imc = peso/ (altura*2) ;
        if(imc >= 18 && imc <= 25 );
        if(imc==20)
            alert("Parabens você está com o peso ideal");
        if(imc < 18)
            ("Cuidado! você precisa aumentar seu peso")
        else
            alert("Parabens, você está dentro da media");
        //else 
        //    alert("Cuidado! você precisa diminuir seu peso");
    }
    
    console.log(imc())