import React from "react"

const Card = (props) => {
    return(
        <>
            <div className="card">
                    <img className="card-img-top" id={`${props.name}-img`} src={props.img} alt={props.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
        </>
    );
};

export default Card; 