/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useContext } from "react";
import img1 from "public/contact.png";
import swal from "sweetalert";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";

const dashboard = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Access the form data
    const pictureUrl = data.pictureUrl;
    const title = data.title;
    const uploader = data.uploader;
    const uploaderEmail = data.uploaderEmail;
    const category = data.category;
    const description = data.description;

    const addBlog = {
      pictureUrl,
      title,
      uploader,
      uploaderEmail,
      category,
      description,
    };

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBlog),
    })
      .then((res) => {
        if (res.ok) {
          swal("Success", "Successfully added a blog!", "success");
          event.target.reset();
        } else {
          swal(
            "Error",
            "Failed to add the blog. Please try again later.",
            "error"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        swal("Error", "An error occurred. Please try again later.", "error");
      });
  };
  return (
    <div className="md:flex mt-24 lg:mt-28 mb-8 ">
      <div className="md:w-1/2">
        <Image
          className=" mx-auto banner-img "
          height={500}
          width={500}
          src={img1}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 mx-auto md:mx-0 md:mt-0 mt-8 bg-green-50 p-8 text-center rounded shadow"
      >
        <h2 className="md:text-5xl font-semibold md:mb-6 text-center text-2xl p-6">
          <span className="text-green-800">Add</span>{" "}
          <span className="text-green-400">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-medium">
              Picture URL of the blog
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              required
            />
          </div>
        </div>
        {user && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="uploader" className="block font-medium">
                  Uploaded By
                </label>
                <input
                  type="text"
                  id="uploader"
                  name="uploader"
                  className="input"
                  defaultValue={user.displayName}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="uploaderEmail" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="uploaderEmail"
                  name="uploaderEmail"
                  className="input"
                  defaultValue={user.email}
                  required
                />
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="category" className="block font-medium">
              Feature
            </label>
            <select id="category" name="category" className="input" required>
              <option value="">Select Feature</option>
              <option value="Sports">Sports</option>
              <option value="International">International</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Politics">Politics</option>
              <option value="Science & Technology">Science & Technology</option>
              <option value="Others">
              Others 
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="description" className="block font-medium">
            Detail description
          </label>
          <textarea
            id="description"
            name="description"
            className="input w-full"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-success w-3/4 mx-auto"
            type="submit"
            value="Add Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default dashboard;
