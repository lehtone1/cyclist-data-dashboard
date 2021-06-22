import React from 'react';
import './Table.css';

const Table = ({ locationData }) => {
  return (
    <div className="Table-container">
      <table className="Table">
          <thead className="Table-head">
            <tr >
              <th>Päivämäärä</th>
              <th>Aika</th>
              <th>Pyöräilijöitä (kpl)</th>
              <th>Ilman Lämpötila (degC)</th>
              <th>Sademäärä (mm)</th>
              <th>Sateen Intensiteetti (mm/h)</th>
              <th>Suhteellinen Kosteus (%)</th>
              <th>Pilvien Määrä (1/8)</th>
              <th>Tuulen Nopeus (m/s)</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {
              locationData.map((item) => (
                <tr key={item.sijainti}>
                  <td>{item.päivämäärä}</td>
                  <td>{item.aika}</td>
                  <td>{item.pyöräilijöitä}</td>
                  <td>{item.ilman_lämpötila}</td>
                  <td>{item.sademäärä}</td>
                  <td>{item.sateen_intensiteetti}</td>
                  <td>{item.suhteellinen_kosteus}</td>
                  <td>{item.pilvien_määrä}</td>
                  <td>{item.tuulen_nopeus}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
};

export default Table;