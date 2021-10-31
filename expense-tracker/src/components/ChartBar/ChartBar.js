import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{color: 'red'}}></div>
            </div>
            <div className="chart-bar__label">{props.label} - {props.value}</div>
        </div>
    )
};

export default ChartBar;