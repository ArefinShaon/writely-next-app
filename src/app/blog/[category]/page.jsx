"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

async function getData(category) {
  const res = await fetch(
    `/api/posts?category=${category}`,
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
    <div className="mt-24 mb-10 lg:px-20">
      <h1 className="text-2xl lg:text-3xl text-black font-bold hover:text-green-600 underline mb-6 text-center">
        {decodedCategory}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-lg"
            
          >
            <div className="relative group">
                <div className="relative">
                  <Image
                    src={item.pictureUrl}
                    height={450}
                    width={450}
                    alt="Image"
                    priority={true}
                    className="mx-auto rounded-lg "
                  />
                  <div className="px-2 absolute inset-0 bg-slate-500 opacity-0 group-hover:opacity-75 transition-opacity rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/allTags/${item._id}`}
                      className="btn text-white font-bold btn-success"
                    >
                      Continue Reading..
                      <span>
                        {" "}
                        <FaArrowRight></FaArrowRight>{" "}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2 md:mt-2 px-6">
                  <h1 className="font-bold  md:text-xl">{item.title}</h1>
                  <p>By  <span className="font-bold">{item.uploader}</span></p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
