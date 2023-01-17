

const planets = [
    { planetName: "Sun", gravity: 27.9, image: "planetImage/Sun.png" },
    { planetName: "Moon", gravity: 0.1655, image: "planetImage/Moon.png" },
    { planetName: "Mercury", gravity: 0.377, image: "planetImage/Mercury1.png" },
    { planetName: "Venus", gravity: 0.9032, image: "planetImage/Venus.png" },
    { planetName: "Earth", gravity: 1, image: "planetImage/Earth.png" },
    { planetName: "Mars", gravity: 0.3895, image: "planetImage/Mars.png" },
    { planetName: "Jupiter", gravity: 2.640, image: "planetImage/Jupiter.png" },
    { planetName: "Saturn", gravity: 1.139, image: "planetImage/Saturn.png" },
    { planetName: "Uranus", gravity: 0.917, image: "planetImage/Uranus.png" },
    { planetName: "Neptune", gravity: 1.148, image: "planetImage/Neptune.png" },
]

planets.map((ele)=>{
    var option = document.createElement("option")
    option.innerHTML = ele.planetName
    option.value = ele.gravity
    option.setAttribute("name",ele.image)

    const select = document.getElementById("selectPlanet")
    select.appendChild(option)
})

function calculate(){
    var answer = document.getElementById("answerDiv")
    answer.innerHTML = ""

    var mass = +document.getElementById("mass").value

    var mainDiv = document.createElement("div")
    mainDiv.classList.add("mainDiv")
    answer.appendChild(mainDiv)

    if(mass == 0){
        var alert = document.createElement("div")
        alert.classList.add("alert")
        mainDiv.appendChild(alert)

        var h1 = document.createElement("h1")
        alert.appendChild(h1)
        h1.innerHTML = "Mass is Required"
        h1.style.color="black"
        h1.style.backgroundColor="white"
        h1.style.width = "30%"
        h1.style.height = "30%"
    }else{
        var select = document.getElementById("selectPlanet")
        var index = select.selectedIndex
        var selectoption = select.options[index]
        var gravity = +selectoption.value
        var weight = mass * gravity
        var image = selectoption.getAttribute("name")
       
        var imgdiv = document.createElement("div")
        imgdiv.classList.add("imgcontent")
        mainDiv.appendChild(imgdiv)
        var imgtag = document.createElement("img")
        imgtag.src = image
        imgtag.style.width = "100%"
        imgtag.style.height = "100%"
        imgdiv.appendChild(imgtag)
        var weightdiv = document.createElement("div")
        weightdiv.classList.add("wtcontent")
        mainDiv.appendChild(weightdiv)
        var wtpara = document.createElement("h3")
        wtpara.innerHTML = `The weight of the object ${select.options[index].innerHTML}`
        weightdiv.appendChild(wtpara)
        wtpara.style.fontSize ="1.5rem"
        wtpara.style.color = "white"
        var wtval = document.createElement("h2")
        wtval.innerHTML = `${weight.toFixed(2)} W`
        weightdiv.appendChild(wtval)
        wtval.style.color ="white"
        wtval.style.fontSize = "2rem"
        wtval.style.marginTop ="20px"

       document.getElementById("mass").value=""
            
    }
}