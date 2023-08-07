import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

async function getData(category) {
  const res = await fetch(
    `http://localhost:3000/api/posts?category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
const page = async ({ params }) => {
  console.log(params);
  const data = await getData(params.category);
  return (
    <div>
      <h1>{params.category}</h1>
      {data.map((item) => (
        <div key={item._id}>
          <div>{ item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default page;
