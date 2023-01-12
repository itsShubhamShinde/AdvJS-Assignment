
function hello(){
    var amount = +document.getElementById("input1").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("input2").value
    
    console.log(people);
    if(amount == "" || service == 0 || people == ""){
        alert("Please Enter Information")
    }else{
        var total = (amount * service)/ people;
        var result = document.getElementById("result")
        result.innerHTML=` <p>Tip Amount</p><h1> <sup>$</sup>${total.toFixed(2)}</h1><p>each<p>`
    }
    
}