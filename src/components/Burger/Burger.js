import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            console.log(igKey);
            return [...Array(props.ingredients[igKey])].map( (_, i) =>{
                console.log(igKey + i);
                console.log(props.ingredients[igKey]);
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}

export default burger;