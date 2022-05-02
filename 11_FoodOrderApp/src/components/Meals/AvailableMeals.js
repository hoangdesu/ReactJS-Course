import React from 'react';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Sashimi',
        description: 'Rawwwwwwwww',
        price: 16.5
    },
    {
        id: 'm3',
        name: 'Takoyaki',
        description: 'Octopus, for eating',
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
        description: 'Very nice soupy noodle',
        price: 9.87
    }
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
    ));
    
    return (
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    );
};

export default AvailableMeals;
