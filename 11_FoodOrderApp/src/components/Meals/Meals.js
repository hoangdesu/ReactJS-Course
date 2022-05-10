import React from 'react';

import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';

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
