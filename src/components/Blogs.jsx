import React from "react";
import Button from "../layouts/Button";
// import BlogCard from "../layouts/BlogCard"; // Assuming this component is reusable for displaying text content

const Blogs = () => {
  // Video Data: Array of YouTube Video IDs
  const videoData = [
    { id: "hPRyEqtepb4", title: "Physiotherapy Tips 1" },
    { id: "hPRyEqtepb4", title: "Understanding Posture Correction" },
    { id: "hPRyEqtepb4", title: "Stretching for Flexibility" },
    { id: "hPRyEqtepb4", title: "Strengthening Your Core" },
    { id: "hPRyEqtepb4", title: "Rehabilitation After Injury" },
    { id: "hPRyEqtepb4", title: "Preventing Back Pain" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      {/* Heading and Button */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Blogs
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Stay informed with the latest in physiotherapy, health tips, and wellness advice.
          </p>
        </div>
        <div className="mt-2 lg:mt-0">
          <Button title="Browse Our Articles" />
        </div>
      </div>


      {/* Physiotherapy Video Section - Multiple Videos */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Watch Our Physiotherapy Blog's </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="relative w-full">
              <iframe
                className="w-full h-[300px] rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-center mt-2 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-8">
        <Button title="Explore More Physiotherapy Articles" />
      </div>
    </div>
  );
};

export default Blogs;



