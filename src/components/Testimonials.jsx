import React from "react";


const testimonials = [
  {
    name: " Dr.John Doe",
    feedback:
      "Highlight how physiotherapy plays a key role in injury prevention, rehabilitation, and performance enhancement for athletes.!",
    image: "/doc1.jpg",
    role: "Manual Therapy",
  },
  {
    name: "Dr. Smith",
    feedback: "Dive into the principles behind common physiotherapy methods, like manual therapy, dry needling, or ultrasound therapy.",
    image: "/doc2.jpg", 
    role: "Post-Surgical Rehab",
  },
  {
    name: "Dr. Ak singh",
    feedback:
      "Guide new patients on what will happen during their first visit, how to prepare, and what they can expect in terms of treatment..",
    image: "/doc3.jpg", 
    role: "Exercise Therapy",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-center text-3xl font-bold text-green-800 mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 max-w-sm transition-transform transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-green-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-green-500">{testimonial.role}</p>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;



