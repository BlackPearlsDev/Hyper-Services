import React from 'react';

function Cards(props) {
    console.log(props);
    return (
        <article className={props.nameClass} id={props.nameId}>
            <h3>{props.title}</h3>
            <p id='priceTxt'>{props.price}</p>
            <ul>
                <li>{props.elemOne}</li>
                <li>{props.elemTwo}</li>
                <li>{props.elemThree}</li>
            </ul>
            <button>Get This Plan</button>
        </article>
    )
}

export default Cards;