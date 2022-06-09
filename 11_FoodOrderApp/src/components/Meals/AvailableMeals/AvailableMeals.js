import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../../UI/Card';
import MealItem from '../MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Something fishy 🍣',
        price: 12.99
    },
    {
        id: 'm2',
        name: 'Sashimi',
        description: 'Rawwwwwwwww',
        price: 12.5
    },
    {
        id: 'm3',
        name: 'Takoyaki',
        description: 'Octopus, for eating, not hentai',
        price: 12.99
    },
    {
        id: 'm4',
        name: 'Unagi',
        description: 'Eel, not ew',
        price: 18.99
    },
    {
        id: 'm5',
        name: 'Ramen',
        description: "Naruto's favorite dish",
        price: 9.87
    }
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
