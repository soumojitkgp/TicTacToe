let audioturn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn='X';
let finish=false;

function changeturn(turnow){
    if (turnow==='X'){
        return '0';
    }
    else{
        return 'X';
    }
}
const checkwin= ()=>{
    let spanboxes=document.getElementsByClassName('spanbox')
    let wins=[
        [0,1,2,5,9,0],
        [3,4,5,5,19,0],
        [6,7,8,5,29,0],
        [0,3,6,-5,20,90],
        [1,4,7,5,20,90],
        [2,5,8,15,20,90],
        [0,4,8,5,19,45],
        [2,4,6,5,19,135]
    ]
    wins.forEach(e=>{
        if((spanboxes[e[0]].innerText===spanboxes[e[1]].innerText) && (spanboxes[e[0]].innerText===spanboxes[e[2]].innerText) && (spanboxes[e[0]].innerText!=="") && finish===false){
            info=document.getElementsByClassName('info');
            //console.log(spanboxes[e[0]].innerText)
            info[0].innerText=spanboxes[e[0]].innerText+" won";
            finish=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="70%";
            gameover.play();
            document.querySelector('#line').style.width='20vw';
            document.querySelector('#line').style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let count=0;
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let spanbox=element.querySelector('.spanbox')
    //console.log(spanbox);
    element.addEventListener('click', ()=>{
        if(spanbox.innerText === "" && finish===false){
            spanbox.innerText = turn;
            turn=changeturn(turn);
            audioturn.play();
            info=document.getElementsByClassName('info');
            checkwin();
            count++
            if(finish===false){
                if(count!==9){
                    info[0].innerText="Turn for "+ turn;
                    //console.log(count)
                }
                else{
                    info[0].innerText="Draw!!!";
                    gameover.play()
                    finish=true;
                }
            }
        }
    })
})
reset= document.getElementById("reset");
reset.addEventListener('click', ()=>{
    Array.from(boxes).forEach(element =>{
        let spanbox=element.querySelector('.spanbox');
        spanbox.innerText="";
    })
        finish=false;
        gameover.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
        info=document.getElementsByClassName('info');
        info[0].innerText="Turn for X";
        turn="X"
        count=0
        document.querySelector('#line').style.width='0';
})
