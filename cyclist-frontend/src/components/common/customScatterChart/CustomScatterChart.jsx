import React from 'react';
import { 
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
 } from 'recharts';

const CustomScatterChart = ({ data, heading }) => {
  return (
    <div className="flex flex-jc-c sm-ver-margin">
      <div>
        <p className="text-center">{heading}</p>
        <ScatterChart width={730} height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ilman_lämpötila" name="Ilman lämpötila" unit="C" type="number"/>
            <YAxis dataKey="pyöräilijöitä" name="Pyöräilijöitä" unit="kpl" />
            <ZAxis dataKey="päivämäärä" name="Päivämäärä" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Mittaukset" data={data} fill="#8884d8" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default CustomScatterChart;