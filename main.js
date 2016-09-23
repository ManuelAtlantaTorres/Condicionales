console.log("funciona")
var numero = 0; 

function saludar(nombre){
	var saludo = "hola" + nombre;
	alert(saludo);
	return saludo;
}

// Econtrar numeros pares,
// si es par escribe fizz, en otro caso escribe buzz
function  FizzBuzzSimple(num){
	//sobrante = ;
	// 0, "" NaN, undefined, null -> falsos
	if ((num % 2 ) == 0){
		console.log("Fizz")
	}else{
		console.log("Buzz")
	}

}
//fibonacci 
//1,1,2,,3,5,8,13,21,34,55
//f(n) = f(n-2) + f(n-1)
//f(5) = 2+3
function fibonacci(n){
	var res = 0;
	if(n == 1){
		res = 0;
			} else if(n == 2){
				res = 1;

			}else{
				  res = fibonacci(n-2) + fibonacci(n-1);
			}
		return res;
    }

    // factorial 
    // n! = n * (n-1) * (n-2)... * 1
    // n! = n * (n-1)!

    function factorial(n){
    	var resultado = 0;
    	if(n==1){
    		resultado = 1
    	} else {
    		resultado = n * factorial(n-1);

    	}
    	return resultado;
    }