// import React from "react";
// import Button from "../layouts/Button";
// // import BlogCard from "../layouts/BlogCard"; // Assuming this component is reusable for displaying text content

// const Blogs = () => {
//   // Video Data: Array of YouTube Video IDs
//   const videoData = [
//     { id: "hPRyEqtepb4", title: "Physiotherapy Tips 1" },
//     { id: "hPRyEqtepb4", title: "Understanding Posture Correction" },
//     { id: "hPRyEqtepb4", title: "Stretching for Flexibility" },
//     { id: "hPRyEqtepb4", title: "Strengthening Your Core" },
//     { id: "hPRyEqtepb4", title: "Rehabilitation After Injury" },
//     { id: "hPRyEqtepb4", title: "Preventing Back Pain" },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
//       {/* Heading and Button */}
//       <div className="flex flex-col items-center lg:flex-row justify-between">
//         <div>
//           <h1 className="text-4xl font-semibold text-center lg:text-start">
//             Our Blogs
//           </h1>
//           <p className="mt-2 text-center lg:text-start">
//             Stay informed with the latest in physiotherapy, health tips, and wellness advice.
//           </p>
//         </div>
//         <div className="mt-2 lg:mt-0">
//           <Button title="Browse Our Articles" />
//         </div>
//       </div>


//       {/* Physiotherapy Video Section - Multiple Videos */}
//       <div className="my-12">
//         <h2 className="text-3xl font-semibold text-center mb-8">Watch Our Physiotherapy Blog's </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videoData.map((video, index) => (
//             <div key={index} className="relative w-full">
//               <iframe
//                 className="w-full h-[300px] rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
//                 src={`https://www.youtube.com/embed/${video.id}`}
//                 title={video.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <h3 className="text-center mt-2 text-lg font-semibold">{video.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Call to Action Button */}
//       <div className="flex justify-center mt-8">
//         <Button title="Explore More Physiotherapy Articles" />
//       </div>
//     </div>
//   );
// };

// export default Blogs;



import React from "react";
import Button from "../layouts/Button";

const Blogs = () => {
  // Video Data: Array of YouTube Video IDs and Titles
  const videoData = [
    { id: "hPRyEqtepb4", title: "Physiotherapy Tips 1" },
    { id: "hPRyEqtepb4", title: "Understanding Posture Correction" },
    { id: "hPRyEqtepb4", title: "Stretching for Flexibility" },
    { id: "hPRyEqtepb4", title: "Strengthening Your Core" },
    { id: "hPRyEqtepb4", title: "Rehabilitation After Injury" },
    { id: "hPRyEqtepb4", title: "Preventing Back Pain" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-32 pt-24">
      {/* Header Section */}
      <div className="flex flex-col items-center lg:flex-row justify-between text-center lg:text-start gap-4 lg:gap-0">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Our Blogs
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            Stay informed with the latest in physiotherapy, health tips, and wellness advice.
          </p>
        </div>
        <div>
          <Button title="Browse Our Articles" />
        </div>
      </div>

      {/* Video Section */}
      <div className="my-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
          Watch Our Physiotherapy Blog's
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="relative w-full">
              <iframe
                className="w-full h-[250px] sm:h-[300px] rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-center mt-2 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex justify-center mt-8">
        <Button title="Explore More Physiotherapy Articles" />
      </div>
    </div>
  );
};

export default Blogs;
