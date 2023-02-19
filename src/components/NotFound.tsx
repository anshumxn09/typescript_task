import React from 'react'
import { Blob } from 'react-blob'

const NotFound : React.FunctionComponent = () => {
  return (
    <div className="foundContainer" style={{display : "flex", justifyContent: "center", alignItems : "center", paddingTop : "50px"}}>
        <div className="content" style={{position : "relative", display : "flex", justifyContent: "center", alignItems : "center"}}>
            <Blob style={{
                width : '400px',
                height : "400px",
                background : "#1164a2",
                position : "absolute",
                zIndex : -1
            }}></Blob>
            <div style={{zIndex : 20}}>
            <img src="https://cdn-icons-png.flaticon.com/512/5317/5317928.png" alt="NotFoundNotes" width={300} height={300} />
            <p style={{textAlign : "center"}}>Create A Note</p>
            </div>
        </div>
    </div>
  )
}

export default NotFound;