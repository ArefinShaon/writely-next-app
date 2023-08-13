import Image from "next/image";
import React from "react";
import img from "../../../public/photo-1664575196412-ed801e8333a1.jpeg";
const About = () => {
    return (
        <div className="lg:mx-16">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
              <Image
                src={img}
                        className="w-5/6 h-4/6 lg:w-1/2 rounded-lg shadow-2xl"
                        alt="image"
              />
              <div>
                <h1 className="text-5xl font-bold p-8">About Us</h1>
                <p className="px-8 text-xl font-bold">
                  Writely basically a blogging website.
                </p>
                <p className="px-8 py-2 text-xl">
                Welcome to Writely, a platform where words come alive and stories find their voice. Our passion for creativity and the written word drives us to create a space for writers, readers, and storytellers to connect and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default About;
