import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c0af6c26f7c741a6d8e528f2e357fac6

const App = () => {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({});
  const [name, setName] = useState({});
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0af6c26f7c741a6d8e528f2e357fac6`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setName(response.data);
      setTemp(response.data.main);
    });
  }, [location]);

  return (
    <>
      <div>
        <Search setLocation={setLocation} />
        <Card temp={temp} name={name} />
      </div>
    </>
  );
};

export default App;
