import React from 'react';
import FanChart from './FanChart.js'
import BarChart from './BarChart';

function App() {
    return (
        <div>
            <BarChart></BarChart>
            <FanChart chartid={"chart1"}></FanChart>
            <FanChart chartid={"chart2"}></FanChart>
            <FanChart chartid={"chart3"}></FanChart>
        </div>
    );
}

export default App;