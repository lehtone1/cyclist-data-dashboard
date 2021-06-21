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
              <th>Pyöräilijöitä</th>
              <th>Ilman Lämpötila</th>
              <th>Sademäärä</th>
              <th>Sateen Intensiteetti</th>
              <th>Suhteellinen Kosteus</th>
              <th>Pilvien Määrä</th>
              <th>Tuulen Nopeus</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {
              locationData.map((item) => (
                <tr>
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