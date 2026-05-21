import React from 'react';

function MyPizza({ pizza }) {
    return (
        <div className="pizza-card">
            <img className="pizza-img" src={pizza.imageSrc} alt={pizza.name} />
            <div className="pizza-body">
                <h3 className="pizza-title">{pizza.name}</h3>
                <p className="pizza-desc">{pizza.description}</p>
                <p className="pizza-prices"><span className="old">{pizza.oldPrice}</span> <span className="new">{pizza.newPrice}</span></p>
                <p className="pizza-tag">{pizza.tag}</p>
                <p className="pizza-id">ID: {pizza.id}</p>
            </div>
        </div>
    );
}

export default MyPizza;