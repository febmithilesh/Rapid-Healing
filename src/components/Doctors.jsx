import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/physical-rehabilitation-therapy-medium-shot_23-2149173475.jpg",
      name: "Dr. Jhone",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321625.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "https://img.freepik.com/free-photo/medium-shot-athlete-doing-physiotherapy_23-2149866138.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: "https://img.freepik.com/free-photo/male-osteopathic-therapist-with-medical-mask-checking-female-patient-s-neck-muscles_23-2148846628.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "https://img.freepik.com/premium-photo/adult-man-trains-muscle-strength-with-professional-doctor-modern-rehabilitation-clinic-phy_136615-520.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "https://img.freepik.com/premium-photo/patient-sitting-showing-spine-model-where-she-feels-pain_232070-2095.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
    {
      img: "https://img.freepik.com/free-photo/woman-having-physiotherapy-session_23-2149115643.jpg",
      name: "Dr. Sophia Lee",
      specialties: "Physiotherapist",
    },
    {
      img: "https://img.freepik.com/premium-photo/young-female-doctor-examining-patient-medical-office_109710-355.jpg",
      name: "Dr. James Hamilton",
      specialties: "Physiotherapist",
    },
    {
      img: "https://img.freepik.com/free-photo/physiotherapist-helping-female-patient-her-clinic_23-2149115563.jpg",
      name: "Dr. Emma Clark",
      specialties: "Physiotherapist",
    },
    {
      img: "https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071463.jpg",
      name: "Dr. Noah Williams",
      specialties: "Physiotherapist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-24 px-5 pt-16">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between mb-8">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            Meet Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-left text-gray-600">
            A team of highly experienced professionals committed to your health
            and well-being.
          </p>
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 lg:mt-0">
          <button
            className="bg-[#d5f2ec] p-3 rounded-full text-gray-600 hover:bg-[#ade9dc] transition-all"
            onClick={() => slider.current.slickPrev()}
            aria-label="Previous Slide"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="bg-[#d5f2ec] p-3 rounded-full text-gray-600 hover:bg-[#ade9dc] transition-all"
            onClick={() => slider.current.slickNext()}
            aria-label="Next Slide"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((doctor, index) => (
            <div
              key={index}
              className="h-[350px] text-black rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mb-4 cursor-pointer"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="h-56 rounded-t-xl w-full object-cover"
              />
              <div className="flex flex-col justify-center items-center py-4 px-2">
                <h1 className="font-semibold text-xl">{doctor.name}</h1>
                <h3 className="text-sm text-gray-600">{doctor.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
