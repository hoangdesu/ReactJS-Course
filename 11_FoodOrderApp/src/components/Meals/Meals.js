import React from 'react';

import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';

const Meals = () => {
    return (
        <>
            <main>
                <MealsSummary />
                <AvailableMeals />
            </main>
        </>
    );
};

export default Meals;
