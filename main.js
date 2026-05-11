const boxes=document.querySelectorAll('.box')
const resetBtn=document.querySelector('#reset-button')
const newGameBtn=document.querySelector("#new-game")
const winMsg=document.querySelector("#winner-announce")
newGameBtn.classList.add("hide")

let turnX=true
let count=0
const winPatterns=[
    [0,1,2],[0,3,6],
    [0,4,8],[1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
]
resetBtn.addEventListener('click',()=>{
    window.location.reload()
})
newGameBtn.addEventListener('click',()=>{
    window.location.reload()
})

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        count+=1
        if(turnX){
            box.innerText='X'
            turnX=false
            box.style.color="red"
        }
        else{
            box.innerText='O'
            turnX=true
        }
        box.disabled=true
        checkWinner()
    })
})

const checkWinner=()=>{
    for(const pattern of winPatterns){
        const pos1Val=boxes[pattern[0]].innerText
        const pos2Val=boxes[pattern[1]].innerText
        const pos3Val=boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is", pos1Val)
                
                winMsg.innerText="Winner is "+pos1Val
                for(let box of boxes){
                    box.disabled=true
                }
                newGameBtn.classList.remove("hide")
                resetBtn.classList.add("hide")
                
            }
            if(count==9){
                winMsg.innerText="Match Draw"
            }
        }
    }
}
