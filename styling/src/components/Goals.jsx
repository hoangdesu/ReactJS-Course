import React from 'react';

const Goals = (props) => {
    // --- using event delegation: not good -> items are still in array, only node gets removed
    // const removeGoalHandler = (evt) => {
    //     evt.target.nodeName === 'LI' && evt.target.remove();
    // };

    const removeGoalHandler = (evt) => {
        const index = Array.from(evt.target.parentElement.children).indexOf(evt.target);
        props.setGoals(prev => {
            if (evt.target.nodeName === 'LI') {
                const removed = prev.splice(index, 1);
                console.log('Removed:', removed);
            };
            console.log('Items left:', prev);
            // delete prev[index]; // only remove values 
            return [...prev];
        });
    };

    return (
        <div>
            <ul onClick={removeGoalHandler}>
                {props.goals.map((goal, index) => {
                    return (
                        <li key={index}>
                            {index + 1}. {goal}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Goals;
