import React from "react";
import img1 from "public/apps.jpg";
import img2 from "../../../public/illustration.png";
import img3 from "../../../public/photo-1664575196412-ed801e8333a1.jpeg";
import img4 from "../../../public/websites.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <div className=" pb-12">
      <h1 className="text-3xl mt-20 mb-20 py-6 text-center font-bold ">Features</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:pl-20">
            <h1 className="lg:text-3xl text-2xl uppercase font-bold hover:underline">
            This is Writely ,<br /> WRITING SOFTWARE FOR BLOGS
            </h1>
            <p className="py-6">
              Writely provides a user-friendly interface, advanced formatting
              options, and helpful features such as character and scene
              breakdowns, revision tracking, and collaboration tools. With its
              powerful tools and intuitive design.
            </p>
          </div>
          <Image
            src={img1}
            className="w-5/6 h-5/6 lg:w-3/6 rounded-lg shadow-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="hero my-16 ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <Image
            src={img2}
            className="w-5/6 h-4/6 lg:w-1/3 rounded-lg shadow-2xl"
            alt="image"
          />
          <div className="lg:pr-20">
            <h1 className="lg:text-3xl text-2xl font-bold hover:underline">
              TRACK EVERY EDIT WITH EASE
            </h1>

            <p className="py-6">
              A per-row script history list is a feature in scriptwriting
              software that allows writers to track changes made to their
              scripts on a row-by-row basis. With this feature, writers can see
              a complete history of edits made to each line of dialogue, stage
              direction, or action in their script. This makes it easy to
              compare different versions of a script and to identify where
              changes have been made. The per-row script history list is an
              essential tool for writers who want to keep track of their
              progress and ensure that their scripts are always up-to-date.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:pl-20">
            <h1 className="lg:text-3xl text-2xl uppercase font-bold hover:underline">
              ASK Writely FOR SUGGESTION
            </h1>
            <p className="py-6">
              To help you create high-quality story, Writely offers a powerful
              editing feature.you can easily enhance the quality of your text by
              highlighting the selected text, correcting any spelling and
              grammar errors, and adjusting the tone of the paragraph as
              necessary. This feature provides you with the flexibility to
              customize your text and make it more engaging and effective.
            </p>
          </div>
          <Image
            src={img3}
            className="w-5/6 h-4/6 lg:w-3/6 rounded-lg shadow-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="hero my-16 ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <Image
            src={img4}
            className="w-5/6 h-4/6 lg:w-3/6 rounded-lg shadow-2xl"
            alt="image"
          />
          <div className="lg:pr-20">
            <h1 className="lg:text-3xl text-2xl font-bold hover:underline">
              CHANGE YOUR CHARACTER ACCENT
            </h1>

            <p className="py-6">
              Personalize your character and make it truly unique. It allows you
              to change your accent, making it sound more distinct and
              authentic. Whether you want to add a touch of personality to your
              character or create a character that stands out, this feature
              provides you with the flexibility to customize your character
              accent to match your preferences. With this feature, you can
              create a character that truly represents you and brings your story
              to life.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Features;