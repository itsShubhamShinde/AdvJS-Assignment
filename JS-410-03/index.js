
console.log("hello");

var input1 = document.getElementById("input")
var result = document.getElementById("answerDiv")

async function searchFood() {
    result.innerHTML = " "
    const input = input1.value


    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    const data = await res.json()

    data.meals.map((ele)=>{
        console.log(ele);
        var image = ele.strMealThumb
        console.log(image);
        result.innerHTML += `<img src="${image}" alt="">`
    })
}