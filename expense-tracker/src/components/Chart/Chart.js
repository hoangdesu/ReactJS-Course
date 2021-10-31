import React from 'react';

import './Chart.css';
import ChartBar from '../ChartBar/ChartBar';

const Chart = (props) => {
    // init an object to store calulated total expeses then pass to ChartBar
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // sum total expenses by month
    props.filteredList.forEach(expense => {
        const month = expense.date.getMonth(); // month starts at 0 => Jan = 0
        chartDataPoints[month].value += expense.price;
        // console.log(expense, month);
    });

    // console.log(chartDataPoints); // gottem!
    
    // look for max value among the expenses
    const maxValue = chartDataPoints.reduce((max, candidate) => {
        if (candidate.value > max.value) return candidate;
        return max;
    })

    // console.log('MAXXXXXXXXX', maxValue);

    return (
        <div className="chart">
            {/* {props.dataPoints.map(data => (
                <ChartBar 
                    key={} 
                    label={} 
                    value={} 
                    maxValue={} 
                />
            ))} */}
            {/* {
                <ChartBar
                    key={chartDataPoints.label}
                    label={chartDataPoints.label}
                    value={chartDataPoints.value}
                />
            } */}
            {chartDataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue.value}
                />
            ))}
        </div>
    );
};

export default Chart;
