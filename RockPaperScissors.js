function MakeHiddenTop(){
    document.getElementById("top_img").style.visibility="hidden";
}
function MakeHiddenMiddle(){
    document.getElementById("middle_img").style.visibility="hidden";
}
function MakeHiddenBottom(){
    document.getElementById("bottom_img").style.visibility="hidden";
}
function MakeWinHidden(){
    document.getElementById("h").style.visibility="hidden"
}
function isready(){
    if(parseInt(document.getElementById("R").innerHTML)==1){
        return true;
    }
    else{
        return false;
    }
}
function notnull(){
    document.getElementById("R").innerHTML="1";
}
function GenerateOutcome(pick) {
    if(isready()==true){
    let outcome = Math.floor(Math.random()*3)+1;
    if (pick==1){
        if (outcome==1){
            document.getElementById("top_img").style.visibility="visible";
            setTimeout(MakeHiddenTop, 2000);
            document.getElementById("h").innerHTML="Draw";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("D").innerHTML=parseInt(document.getElementById("D").innerHTML)+1
            document.getElementById("p3").innerHTML=("Draw: "+parseInt(document.getElementById("D").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if(outcome==2){
            document.getElementById("middle_img").style.visibility="visible";
            setTimeout(MakeHiddenMiddle, 2000);
            document.getElementById("h").innerHTML="You Lose";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("L").innerHTML=parseInt(document.getElementById("L").innerHTML)+1
            document.getElementById("p2").innerHTML=("Loss: "+parseInt(document.getElementById("L").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if (outcome==3){
            document.getElementById("bottom_img").style.visibility="visible";
            setTimeout(MakeHiddenBottom, 2000);
            document.getElementById("h").innerHTML="You Win";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("W").innerHTML=parseInt(document.getElementById("W").innerHTML)+1
            document.getElementById("p1").innerHTML=("Won: "+parseInt(document.getElementById("W").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
    }
    else if (pick==2){
        if (outcome==1){
            document.getElementById("top_img").style.visibility="visible";
            setTimeout(MakeHiddenTop, 2000);
            document.getElementById("h").innerHTML="You Win";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("W").innerHTML=parseInt(document.getElementById("W").innerHTML)+1
            document.getElementById("p1").innerHTML=("Won: "+parseInt(document.getElementById("W").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if(outcome==2){
            document.getElementById("middle_img").style.visibility="visible";
            setTimeout(MakeHiddenMiddle, 2000);
            document.getElementById("h").innerHTML="Draw";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("D").innerHTML=parseInt(document.getElementById("D").innerHTML)+1
            document.getElementById("p3").innerHTML=("Draw: "+parseInt(document.getElementById("D").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if (outcome==3){
            document.getElementById("bottom_img").style.visibility="visible";
            setTimeout(MakeHiddenBottom, 2000);
            document.getElementById("h").innerHTML="You Lose";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("L").innerHTML=parseInt(document.getElementById("L").innerHTML)+1
            document.getElementById("p2").innerHTML=("Loss: "+parseInt(document.getElementById("L").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
    }
    else if (pick==3){
        if (outcome==1){
            document.getElementById("top_img").style.visibility="visible";
            setTimeout(MakeHiddenTop, 2000);
            document.getElementById("h").innerHTML="You Lose";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("L").innerHTML=parseInt(document.getElementById("L").innerHTML)+1
            document.getElementById("p2").innerHTML=("Loss: "+parseInt(document.getElementById("L").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if(outcome==2){

            document.getElementById("middle_img").style.visibility="visible";
            setTimeout(MakeHiddenMiddle, 2000);
            document.getElementById("h").innerHTML="You Win";
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("W").innerHTML=parseInt(document.getElementById("W").innerHTML)+1
            document.getElementById("p1").innerHTML=("Won: "+parseInt(document.getElementById("W").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
        else if (outcome==3){

            document.getElementById("bottom_img").style.visibility="visible";
            setTimeout(MakeHiddenBottom, 2000);
            document.getElementById("h").innerHTML="Draw"
            document.getElementById("h").style.visibility="visible";
            setTimeout(MakeWinHidden, 2000);
            document.getElementById("D").innerHTML=parseInt(document.getElementById("D").innerHTML)+1
            document.getElementById("p3").innerHTML=("Draw: "+parseInt(document.getElementById("D").innerHTML));
            document.getElementById("R").innerHTML="0";
            setTimeout(notnull, 2000);
        }
    }
    }
}