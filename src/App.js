import React, { useState } from "react";
import axios from "axios";
import Provinces from "./Provinces";
import Table from "./Table";

const App = () => {
  const [pharmacies, setPharmacies] = useState([]);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const getPharmaciesByProvinceId = async (provinceId) => {
    try {
      const response = await axios.get(
        "http://api.kodlama.net/eczane/il/" + provinceId
      );
      setPharmacies(response.data.data);
    } catch (error) {}
  };

  const onChangeProvince = (event) => {
    let id = event.target.options.selectedIndex;
    if (id < 10) {
      id = "0" + id;
    }
    getPharmaciesByProvinceId(id);
  };

  return (
    <div className="container mt-3">
      <h1 className="text-primary text-center">NÖBETÇİ ECZANELER</h1>
      <h3 className="text-center">
        {date}.{month}.{year}
      </h3>
      <Provinces onChangeProvince={onChangeProvince} />
      {pharmacies.length !== 0 && <Table pharmacies={pharmacies} />}
    </div>
  );
};

export default App;
