import React from 'react'

const Header:React.FunctionComponent = () => {
  return (
    <>
    <div className="headerContainer" style={{padding : "10px"}}>
        <div className="content" style={{display : "flex", alignItems : "center"}}>
        <img src="https://media.istockphoto.com/id/941221722/vector/character-reaching-top-of-the-mountain-and-sticking-a-flag-thin-line-icon-trendy-design.jpg?s=612x612&w=0&k=20&c=NWlzQ9lo_nIfiIgy0FfuCVRYWdMvm3nPjujPbzO-9Ro=" alt="icon" width={70} height={70}/>
        <span style={{fontSize : "25px", color : "#1164a2"}}>Daily Goals</span>
        </div>
    </div>
    </>
  )
}

export default Header;