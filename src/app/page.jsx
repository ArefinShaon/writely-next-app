import Image from "next/image";
import img from "public/hero.png";
import Blog from "./blog/page";
import Tag from "./allTags/page";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image className="banner-img"  src={img} height={500} width={500} alt="image"></Image>
          <div>
            <h1 className="text-5xl font-bold">Hello! This is Writely.</h1>
            <p className="py-6">
              Welcome to Wriely, a captivating blog webpage featuring
              thought-provoking articles and captivating stories. Explore our
              diverse range of topics, from technology and science to art and
              culture, for an enriching and inspiring experience.
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-success text-white mx-2 my-2 bg-green-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Blog></Blog>
      <Tag></Tag>
    </div>
  );
}
