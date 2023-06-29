import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Using JavaScript built-in FETCH API</h1>
      {data.map((dataObj, index) => (
        <div
          style={{
            width: "15em",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
            color: "white",
          }}
          key={index}
        >
          <p style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            {dataObj.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
