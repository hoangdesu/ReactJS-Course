import React from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
    return (
        <>
            <MealsSummary />
            <main>
                <AvailableMeals />
            </main>
        </>
    );
};

export default Meals;
