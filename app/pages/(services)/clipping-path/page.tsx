"use client";
import { useEffect, useState } from "react";

const ClippingPath = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("fruits.json");
        const data = await res.json();
        console.log(data);
        setFruits(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>ClippingPath</h1>
      <div>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </div>
    </div>
  );
};

export default ClippingPath;
