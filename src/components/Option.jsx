
import React from "react";


function Option (props) {
        return (  
            <div className="opcion">
                <button className="botones" onClick={props.handleClick}  id={props.id} > {props.id}</button>
                <h2>{props.textOption}</h2>
            </div>
        )
}


export default Option;