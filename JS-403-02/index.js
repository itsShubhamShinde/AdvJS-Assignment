var button = document.getElementsByClassName("drum")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(event){
        var buttontext = button[i].innerHTML;
        drumsound(buttontext)
    })   
}

document.addEventListener('keypress',function(event){
    drumsound(event.key)
})
function drumsound(key){
    if(key=='w'){
        var wsound= new Audio("./sounds/w.mp3.mp3")
        wsound.play()
        // console.log("w sound");
    }
    else  if(key=='a'){
        var asound= new Audio("./sounds/a.mp3.mp3")
        asound.play()
        // console.log("a sound");
    }
    else  if(key=='s'){
        var ssound= new Audio("./sounds/s.mp3.mp3")
        ssound.play()
        // console.log("s sound");
    }
    else  if(key=='d'){
        var dsound= new Audio("./sounds/d.mp3.mp3")
        dsound.play()
        // console.log("d sound");
    }
    else  if(key=='j'){
        var jsound= new Audio("./sounds/j.mp3.mp3")
        jsound.play()
        // console.log("j sound");
    }
    else  if(key=='k'){
        var ksound= new Audio("./sounds/k.mp3.mp3")
        ksound.play()
        // console.log("k sound");
    }

    else  if(key=='l'){
        var lsound= new Audio("./sounds/l.mp3.mp3")
        lsound.play()
        // console.log("l sound");
    }
}