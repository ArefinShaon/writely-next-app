/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showAllData, setShowAllData] = useState(false);

  useEffect(() => {
    getData()
      .then((fetchedData) => {
        setData(fetchedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <span className="loading loading-infinity loading-lg bg-green-600"></span>
      </div>
    );
  }

  const visibleData = showAllData ? data : data.slice(0, 6);

  return (
    <div className="m-6 lg:mt-20">
      <h1 className="text-2xl lg:text-3xl">
        <span className="text-black font-bold hover:text-green-600 underline">
          All Blogs
        </span>
      </h1>

      <p className="mx-auto text-center my-6 text-slate-400">
      Explore our diverse range of topics, from technology and science to art and culture, for an enriching and inspiring experience.
      </p>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {visibleData.map((item) => (
            <div key={item._id}>
              <Image
                src={item.pictureUrl}
                height={400}
                width={450}
                alt="Image"
                      priority={true}
                      className="transform transition-all hover:scale-105 "
              ></Image>
              <div>
                <h1 className="font-bold md:text-xl"> {item.title}</h1>
              </div>
              <div className="card-actions justify-end">
                <Link href={`/allTags/${item._id}`} className="btn text-green-800 font-bold btn-outline border-0 border-b-4 mt-2 md:mx-10 ">
                  Read More..
                </Link>
              </div>
            </div>
          ))}
        </div>
        {!showAllData && (
          <div className="text-center mt-4">
            <button
              className="btn btn-success text-white mx-2 my-2 bg-green-800 w-1/2 md:w-1/5"
              onClick={() => setShowAllData(true)}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
