import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>App</h1>;
}

async function fetchData() {
  const DATA_URL = "http://localhost:4566/mybucket/myinitialdata.txt";
  try {
    const response = await fetch(DATA_URL);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
