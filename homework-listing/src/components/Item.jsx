import React from 'react';

const Item = (props) => {
    let level = ''

    switch (true) {
        case props.item.quantity <= 10:
            level = 'level-low'
            break;

        case props.item.quantity <= 20:
            level = 'level-medium'
            break;

        case props.item.quantity > 20:
            level = 'level-high'
            break;

        default:
            level = ''
    }
    console.log(props.item.quantity);
    return (
        <div className="item">
            <div className="item-image">
                <a href={props.item.url}>
                    <img src={props.item.imageUrl} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{props.item.title}</p>
                <p className="item-price">{props.item.currency_code}{props.item.price}</p>
                <p className={`item-quantity ${level}`}>{props.item.quantity}</p>
            </div>
        </div>
    );
}

export default Item;
