import React, { useState } from 'react';
import Form from './components/Form';
import Goals from './components/Goals';

const dummy_goals = ['Learn React', 'Web Developer Bootcamp', 'Figma', 'NextJS', 'NodeJS'];

function App() {
    const [goals, setGoals] = useState(dummy_goals);
    
    return (
        <div className="App">
            <Form setGoals={setGoals} />
            <Goals goals={goals} setGoals={setGoals} />
        </div>
    );
}

export default App;
