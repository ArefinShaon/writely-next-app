import React from "react";
import { notFound } from "next/navigation";

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
    <div className="mt-24">
      <div className="mx-auto flex justify-center items-center">
        <h3 className="text-center  rounded-lg font-semibold text-green-600 mb-2  bg-slate-200 btn btn-sm">
          {data.category}
        </h3>
      </div>
    </div>
  );
};

export default page;
