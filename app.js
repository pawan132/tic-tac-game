let boxes= document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");

let newbtn=document.querySelector("#new-btn");

let msg=document.querySelector(".msg");

let para=document.querySelector("#msg-win");

let turnO=true;


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>
{
    turnO=true;
    enabledbtn();
    msg.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; //cannot update the box once it is marked

        checkWinner();
    });
});

const disabledbtn = () =>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
} 

const enabledbtn = () => {
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) =>{
    para.innerText=`Conratutions, Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledbtn();
}

const checkWinner = () => {
    for(let pattern of winPatterns) 
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }
        }
    }
}

resetBtn.addEventListener("click",resetgame);

newbtn.addEventListener("click",resetgame);
