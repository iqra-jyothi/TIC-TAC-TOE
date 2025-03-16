// import './TicTacst.css';

import { useState } from "react"

// import './App.css'
const TicTac=()=>{
    const [board,setboard]=useState(Array(9).fill(null))
    const [isXturn,setXturn]=useState(true)
    const [winner,setwinner]=useState(null)

    const rendersquare=(index)=>{
        return <button className='square' onClick={()=>handleclick(index)}>{board[index]}</button>
    }
    const handleclick=(index)=>{
        if(board[index]!=null)
        {
            return;
        }
    console.log(index)
    const newboard=[...board]
    newboard[index]=isXturn?'x':'0'
    setboard(newboard)
setXturn(!isXturn)

const winners=checkwinner(newboard)
if(winners)
{
    setwinner(newboard[winners[0]])
}
else if (newboard.every(square => square !== null)) {
    setwinner('Draw');
}
    }


const checkwinner=(newboard)=>{
const combination=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

for(let i=0;i<combination.length;i++){
const[a,b,c]=combination[i];
if(newboard[a]===newboard[b]&&newboard[b]===newboard[c])
{
    return combination[i]

}
}
return null;
}

    return(
        <>
       <div className='board'>
      
        <div className="board-row1">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
        </div>
        <div className="board-row1">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
        </div>
        <div className="board-row1">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
        </div>
       
       </div>
       {winner&&<div>{winner} is the winner</div>}
       
       </>
    )
}
export default TicTac;