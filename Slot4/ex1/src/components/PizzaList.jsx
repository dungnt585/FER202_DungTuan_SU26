// PizzaList.jsx hiện thị danh sách pizza được tạo trong pizzaData.js bằng cách sử dụng component MyPizza
// Chứa trong container react-bootstrap , có Row, Col
import React from 'react';
import MyPizza from './MyPizza';
import { pizzaData } from '../data/pizzaData';

function PizzaList() {
    return (
        <section className="pizza-list container">
            {pizzaData.map(pizza => (
                <div key={pizza.id} className="pizza-col">
                    <MyPizza pizza={pizza} />
                </div>
            ))}
        </section>
    );
}

export default PizzaList;