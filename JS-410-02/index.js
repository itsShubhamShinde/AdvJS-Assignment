console.log("hellow");
var word =document.getElementById("inputsearch")
var result = document.getElementById("answerDiv")

async function searchword() {
    var input = word.value;

    const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    
    console.log(res);
    const data = await res.json()
    result.innerHTML =`<p> ${data[0].shortdef[0]}</p>
    <audio controls>
    <source src="koyal.mp3" type="audio/mpeg"> 
    </audio>
    `
}
