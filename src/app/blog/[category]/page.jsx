"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

async function getData(category) {
  const res = await fetch(
    `http://localhost:3000/api/posts?category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodedCategory = decodeURIComponent(params.category);

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
      <div className="flex justify-center items-center mt-24 ">
        <span className="loading loading-infinity loading-lg bg-green-600"></span>
      </div>
    );
  }

  return (
    <div className="mt-20 mb-10">
      <h1 className="text-2xl lg:text-3xl text-black font-bold hover:text-green-600 underline mb-6 text-center transform transition-all hover:scale-105">
        {decodedCategory}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-lg"
            style={{ backgroundColor: "#151A25" }}
          >
            <Image
              src={item.pictureUrl}
              height={400}
              width={450}
              alt="Image"
              priority={true}
              className="transform transition-all hover:scale-105 rounded-lg mx-auto"
            ></Image>
            <div>
              <h1 className="font-bold md:text-xl py-2 text-white text-center">
                {" "}
                {item.title}
              </h1>
            </div>
            <div className="card-actions justify-end">
              <Link
                href={`/allTags/${item._id}`}
                className="btn text-white font-bold btn-outline btn-success m-4 border-0 border-b-4 mt-2 md:mx-10 "
              >
                Read More..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
