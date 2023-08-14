/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
import Image from "next/image";
const page = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      fetch(`/api/posts?uploaderEmail=${userEmail}`)
        .then((response) => response.json())
        .then((fetchedBlogs) => {
          setBlogs(fetchedBlogs);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user-specific blogs:", error);
          setIsLoading(false);
        });
    }
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));

      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "Successfully Deleted",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-32 ">
        <span className="loading loading-infinity loading-lg bg-green-600"></span>
      </div>
    );
  }

  return (
    <div className="mt-16 py-10 px-6 md:px-18 ">
      <h1 className="text-xl md:text-3xl font-bold text-center my-4">
        My Added Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="border rounded-lg p-4 "
            style={{ backgroundColor: "#25272cb3" }}
          >
            <div className="flex  items-center mb-2">
              <h2 className="font-bold mr-4">
                {index + 1}. {blog.title}
              </h2>
              <p
                onClick={() => handleDelete(blog._id)}
                className="btn btn-success"
              >
                DELETE
              </p>
            </div>
            <Image
              src={blog.pictureUrl}
              height={400}
              width={400}
              alt={blog.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
