import React, { useEffect } from "react";

const Table = (props) => {
  const { pharmacies } = props;

  return (
    <div className="mt-5">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">İLÇE</th>
            <th scope="col">ECZANE</th>
            <th scope="col">TELEFON</th>
            <th scope="col">ADRES</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{pharmacy.eczane_ilce}</td>
                <td>{pharmacy.eczane_adi}</td>
                <td>{pharmacy.eczane_telefon}</td>
                <td>{pharmacy.eczane_adres}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
