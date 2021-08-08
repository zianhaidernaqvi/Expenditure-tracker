import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props){

    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMAX=Math.max(...dataPointValues);
    {console.log(totalMAX)}

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMAX} label={dataPoint.label} />)}
        </div>
    )
}
