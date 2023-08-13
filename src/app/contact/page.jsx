import React from "react";
import img from "../../../public/apps.jpg";

const Page = () => {
  return (
    <div className=" mt-20">
      <div id="contactMe" className="hero text-white py-20 -mt-20">
        <div className="lg:flex-row-reverse">
          <div
            className="text-center w-full"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl text-black font-bold pb-10 pt-8">
              Contact Us
            </h1>
          </div>
          <div className="max-w-4xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="text-white">
              <form
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 pb-5 text-white">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="input input-ghost sm:max-w-full bg-transparent rounded-none border-gray-500 focus:bg-lightpink focus:text-white w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="user_email"
                    className="input input-ghost bg-transparent w-full rounded-none border border-gray-500 focus:bg-lightpink focus:text-white"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Your Phone"
                    name="user_phone"
                    className="input input-ghost bg-transparent w-full rounded-none border-gray-500 focus:bg-lightpink focus:text-white"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  className="textarea rounded-none textarea-ghost bg-transparent focus:bg-lightpink focus:text-white border-gray-500 w-full h-40"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div
                  className="grid justify-center"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <input
                    className="btn btn-success mt-8 px-10"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </form>
              <div
                className="grid text-center lg:grid-cols-3 sm:grid-cols-1 mt-12"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div>
                  <h2 className="text-black font-bold">Email Me</h2>
                  <p className="text-black">arefinshaon99@gmail.com</p>
                </div>
                <div>
                  <h2 className="text-black font-bold">Call me</h2>
                  <p className="text-black">+8801324219004</p>
                </div>
                <div>
                  <h2 className="text-black font-bold">LinkedIn</h2>
                  <p className="text-black">
                    https://www.linkedin.com/in/arefin-shaon/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
