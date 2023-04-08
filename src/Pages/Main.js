import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNumber } from "../Store/Store";
import DataView from "../Components/DataView";
function Main() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("14158586273");
  const history = useSelector((state) => state.user.history);
  console.log(history);
  const handleSearch = () => {
    dispatch(searchNumber({ phoneNumber }));
  };

  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Search for any numbers</h1>
        <input type="number" onChange={phoneNumberChangeHandler} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <DataView data={history} />
    </div>
  );
}

export default Main;
