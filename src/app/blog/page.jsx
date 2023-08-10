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

const getUniqueCategories = (data) => {
  const categories = {};
  const uniqueData = [];

  data.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = true;
      uniqueData.push(item);
    }
  });

  return uniqueData;
};

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((fetchedData) => {
        const uniqueData = getUniqueCategories(fetchedData);
        setData(uniqueData);
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

  return (
    <div className="m-6 lg:mt-20">
      <h1 className="text-2xl lg:text-3xl">
        <span className="text-black font-bold hover:text-green-600 underline">
          Popular Tags
        </span>
      </h1>

      <p className="mx-auto text-center my-6 text-slate-400">
        We have picked few blogs that we are pretty sure you will love. Check
        back often and enjoy.
      </p>
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {data.map((item) => (
            <div
              key={item._id}
              className="transform transition-all hover:scale-105 relative"
            >
              <Link href={`/blog/${item.category}`}>
                <Image
                  src={item.pictureUrl}
                  height={400}
                  width={400}
                  alt="Image"
                  priority={true}
                ></Image>

                <div className="mx-auto  flex justify-center items-center">
                <h3 className=" text-center items-center rounded-lg font-semibold text-cyan-600 mb-2 absolute bottom-0 bg-white opacity-80  btn btn-sm">
                  {item.category}
                </h3>
                </div>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
