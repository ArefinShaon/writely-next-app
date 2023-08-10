"use client"
import React, { useEffect, useState } from "react";


async function getData(category) {
  const res = await fetch(
    `http://localhost:3000/api/posts?category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return []; // Return an empty array or handle the error properly
  }

  return res.json();
}

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodedCategory = decodeURIComponent(params.category); // Decode the category

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData(decodedCategory);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [decodedCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <span className="loading loading-infinity loading-lg bg-green-600"></span>
      </div>
    );
  }

  return (
    <div>
      <h1>{decodedCategory}</h1>
      {data.map((item) => (
        <div key={item._id}>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Page;
