console.log('welcome to Tic-Tac-Toe')
let turn = new Audio('ting.mp3')
let gameover = new Audio('gameover.mp3')
let pick='X'
const changepick= ()=>{
    return pick==='X'?'0':'X'
}
let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(Element=>{
    spanbox=document.querySelector(.spanbox)
})