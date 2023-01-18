var data=document.getElementById("titlePara")
data.innerHTML = `Corrently, we have ${countries_data.length} counteries`

const sortCountries = countries_data.sort(function(a,b){
    return b.population - a.population;
})

let total=0;
for(let i=0;i<sortCountries.length;i++){
    total += sortCountries[i].population
}

const clear = document.getElementById("graphDiv")

var tenPopulation = document.getElementById("ten")

function populationCal(){
    clear.innerHTML=" "

    tenPopulation.innerHTML=`10 most Populated counties in the World`
    
    
    for(let i=0;i<10;i++){
        var div = document.createElement("div")
        div.style.width = "80%"
        div.style.height = "10%"
        div.style.display = "flex"
        div.style.justifyContent="space-evenly"
        div.style.alignItems="center"

        var countrydiv = document.createElement("div")
        countrydiv.style.width="30%"
        countrydiv.style.height="100%"
        countrydiv.style.display="flex"
        countrydiv.style.justifyContent="space-between"
        countrydiv.style.alignItems="center"

        var languageName = document.createElement("p")
        languageName.innerHTML = sortCountries[i].name
        countrydiv.appendChild(languageName)
        div.appendChild(countrydiv)

        var bar = document.createElement("div")
        bar.style.height="70%"
        bar.style.width="30%"
        div.appendChild(bar)

        var perDiv = document.createElement("div")
        bar.appendChild(perDiv)

        var percentage = (sortCountries[i].population / total) * 100;
        perDiv.innerText = `${percentage.toFixed(2)}%`
       
        perDiv.style.width=`${percentage}%`
        perDiv.style.background="orange"
        perDiv.style.height="100%"
        perDiv.style.display="flex"
        perDiv.style.justifyContent="space-between"
        perDiv.style.alignItems="center"
        perDiv.style.fontSize="14px"

        var populationdiv= document.createElement("div")
        populationdiv.innerHTML= sortCountries[i].population
        div.appendChild(populationdiv)

        var answer = document.getElementById("graphDiv")
        answer.appendChild(div)
    }
      
}


function languageCacl(){
    clear.innerHTML=" "

    tenPopulation.innerHTML="10 most Spoken languages in the World";

    var languageArray=[]
    for(let i=0;i<countries_data.length;i++){
        languageArray.push(countries_data[i].languages)
    }
    
    var flatArray= languageArray.flat()
    
    var countlang={}
    flatArray.map((ele) => {
        countlang[ele]= (countlang[ele]||0)+1
    })

    var objarray= Object.entries(countlang)
    
    var sortedlangcount=objarray.sort(function(a,b){
        return b[1]-a[1]
    })
    for(let i=0;i<10;i++){
        var topLanguage = sortedlangcount[i]
        var div= document.createElement("div")
        div.style.width="80%"
        div.style.height="10%"
        div.style.display="flex"
        div.style.justifyContent="space-evenly"
        div.style.alignItems="center"

        var countrydiv= document.createElement("div")
        countrydiv.style.width="20%"
        countrydiv.style.height="100%"
        countrydiv.style.display="flex"
        countrydiv.style.justifyContent="space-between"
        countrydiv.style.alignItems="center"



        var languagename=document.createElement("p")
        languagename.innerHTML= topLanguage[0]
        countrydiv.appendChild(languagename)
        div.appendChild(countrydiv)


        var bar=document.createElement("div")
        bar.style.height="70%"
        bar.style.width="30%"
        div.appendChild(bar)

        var percentdiv= document.createElement("div")
        bar.appendChild(percentdiv)
       

        var percentage=( topLanguage[1]/sortedlangcount.length)*100
        percentdiv.innerText= `${percentage.toFixed(1)}%`


        percentdiv.style.width=`${percentage}%`
        percentdiv.style.background="orange"
        percentdiv.style.height="100%"
        percentdiv.style.display="flex"
        percentdiv.style.justifyContent="space-between"
        percentdiv.style.alignItems="center"
        percentdiv.style.fontSize="14px"

        var languagediv= document.createElement("div")
        languagediv.innerHTML=topLanguage[1]
        div.appendChild(languagediv)


        var answer =document.getElementById("graphDiv")
        answer.appendChild(div)

    }
    // console.log(sortedlangcount);
}