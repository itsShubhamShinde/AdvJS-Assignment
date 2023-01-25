// console.log("hello")

const heading = document.getElementById("heading")
const author= document.getElementById("author")

 async function next(){

    const res= await fetch(`https://api.quotable.io/random`)

    const data= await res.json()

    heading.innerHTML= ` <i class="fa fa-quote-left" aria-hidden="true"></i> ${data.content} <i class="fa fa-quote-right" aria-hidden="true"></i>`
    author.innerHTML= ` ~ ${data.author}`
}

next()