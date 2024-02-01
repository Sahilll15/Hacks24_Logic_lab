import React, { useState } from 'react';    
import Piechart from '../../Components/Cards/PieChart';
import BarChart from '../../Components/Cards/barchart';
import Progressbar from '../../Components/Cards/Progressbar';

const Allchart = () => {
    const chartData = [30, 40, 45, 50, 49, 60, 70, 91, 125];
    const chartCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];
    
    const pieChartData = [
        { label: 'Category 1', value: 30 },
        { label: 'Category 2', value: 40 },
        { label: 'Category 3', value: 20 },
        { label: 'Category 4', value: 10 },
    ];

    const [progressValue, setProgressValue] = useState(0);

    // Simulate progress update
    const simulateProgress = () => {
        if (progressValue < 100) {
            setProgressValue(prevValue => prevValue + 10);
        }
    };

    return (
        <div>
            <BarChart data={chartData} categories={chartCategories} />
            <Piechart data={pieChartData} />
            <button onClick={simulateProgress}>Simulate Progress</button>
            <Progressbar value={progressValue} />
        </div>
    )
}

export default Allchart