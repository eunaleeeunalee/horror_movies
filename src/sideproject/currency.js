import React, { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] =useState(true);
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people`).then(
      response => response.json()
      ).then((json) => {
        setCurrency(json.results);
        setLoading(false);
      });  
  },[]);
  console.log(currency)
  return (
    <div>
      <h1>Coins! </h1>
      {loading ? <strong>loading...</strong>:null}
      <input type="text"></input>
      <ul>
       {currency.map((people, index)=> <li key={index}>{people.name}</li>)}
      </ul>
    </div>
  )
}


export default App;
