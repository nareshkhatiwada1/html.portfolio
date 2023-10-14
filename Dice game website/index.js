function imgg(){
    var rndm=Math.floor(Math.random()*6)+1;
    return "/images/dice"+rndm+".png"
}

function clock(){
    var img1no=Math.floor(Math.random()*6)+1;
    var img2no=Math.floor(Math.random()*6)+1;
    
   document.querySelector(".img1").setAttribute("src","/images/dice"+img1no+".png");

    
   document.querySelector(".img2").setAttribute("src","/images/dice"+img2no+".png");
   if (img1no > img2no){
    document.querySelector("h1").innerHTML="Player 1 is The Winner.";
    }
    else if(img1no < img2no){
        document.querySelector("h1").innerHTML="Player 2 is The Winner.";
    }
    else if (img1no===img2no){
        document.querySelector("h1").innerHTML="You both drew.";
    }

}
//document.onclick = clock; // Remove the parentheses after clock

document.querySelector("img").onclick=clock;

if (img1no > img2no){
    document.querySelector("h1").innerHTML="Player 1 is The Winner.";
}
else if(img1no < img2no){
    document.querySelector("h1").innerHTML="Player 2 is The Winner.";
}
else if (img1no===img2no){
    document.querySelector("h1").innerHTML="You both drew.";
}