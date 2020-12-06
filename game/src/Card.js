import React from "react"

const Card = (props) => {
    const value = props.value;

    const winsAgainst = (aValue, opponentValue) => {
        if (aValue === 5) {
            return opponentValue === 1 || opponentValue === 3
        } else {
            return opponentValue === shiftValue(aValue,1) || opponentValue === shiftValue(aValue,3)
        }
    };

    const shiftValue = (aValue, numberToShift) => {
        let ret = aValue
        for(let i = numberToShift; i !== 0; i--){
            if(ret === 5) {
                ret = 1;
            } else {
                ret++;
            }
        }
        return ret;
    };

    return(
        <>
            <div className="card" onClick = {() => {props.onClick(value)}}>
                <div className="card-header">
                    <h5>{props.name}</h5>
                </div>
                <img className="card-img-top" id={`${props.name}-img`} src={props.img} alt={props.name}/>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default Card; 