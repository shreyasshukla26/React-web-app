import React, { useState, useEffect } from "react";
import Axioss from "./axios";

function App() {
  const [userData, setdata] = useState();
  const fetchData = async () => {
    const res = await fetch(
      "https://api.gyanibooks.com/library/get_dummy_notes/"
    );
    const data = await res.json();
    console.log(data);
    setdata(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      React web app
      <Axioss userData={userData} />
    </div>
  );
}

export default App;
