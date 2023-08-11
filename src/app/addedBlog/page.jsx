/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
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
        text: "Successfully Log In",
      });
    } catch (err) {
      console.log(err);
    }
  };


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Your Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p onClick={() => handleDelete(blog._id)} className="btn btn-success"> DELETE</p>
        </div>
      ))}
    </div>
  );
};

export default page;
