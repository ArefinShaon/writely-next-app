import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const page = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="md:mt-20 mt-16 px-6 py-6 md:px-16 bg-base-200">
      <div className="mx-auto flex justify-center items-center">
        <h3 className="text-center  rounded-lg font-semibold text-green-600 mb-2  bg-slate-200 btn btn-sm">
          {data.category}
        </h3>
      </div>
      <div className="mb-10" >
        <h1 className="text-xl md:text-4xl font-bold md:w-1/2 hover:underline">{data.title}</h1>
        <div>
          <p> By <span className="my-2 font-bold"> {data.uploader}</span></p>
          <p> Email : <span className="font-bold">{ data.uploaderEmail}</span></p>
        </div>
      </div>
      <div className="mx-auto">
        <Image src={data.pictureUrl} alt="Image" width={700} height={500} className="mx-auto"></Image>
        <div className="mt-2 flex justify-end font-bold">
          <p className="px-4">
          Uploaded - October 31, 2022
          </p>
          <p>
          • 5 min read
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold md:w-4/6 py-4 text-center md:text-xl mx-auto">
        Explore our diverse range of topics, from technology and science to art and culture, for an enriching and inspiring experience.
        </h1>
        <p className="w-full md:w-4/6 text-center mx-auto md:text-xl">{data.description}</p>
      </div>
    </div>
  );
};

export default page;
