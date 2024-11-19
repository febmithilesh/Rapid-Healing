// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// const Doctors = () => {
//   const data = [
//     {
//       img: "https://img.freepik.com/free-photo/physical-rehabilitation-therapy-medium-shot_23-2149173475.jpg?t=amst=1732007908~exp=1732011508~hmac=8375c1d94fc2765b886d2615f0edbf55067c7fd817b4ead882d8c866ae7fdd4a&w=996",
//       name: "Dr. Jhone ",
//       specialties: "Orthopedic Surgeon",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321625.jpg?t=st=1732007774~exp=1732011374~hmac=ef4447d5f4ba9b2fbba732f0d2ab9a71772710e06ee7a83ab642893e067ec90e&w=996",
//       name: "Dr. Julian Bennett",
//       specialties: "Cardiologist",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/medium-shot-athlete-doing-physiotherapy_23-2149866138.jpg?t=st=1732008119~exp=1732011719~hmac=328b82e0cbc9ab24c5d4e956b953f80a0988e6ca101654236580159d98d7e897&w=996",
//       name: "Dr. Camila Rodriguez",
//       specialties: "Pediatrician",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/male-osteopathic-therapist-with-medical-mask-checking-female-patient-s-neck-muscles_23-2148846628.jpg?t=st=1732008115~exp=1732011715~hmac=6db3fb13418a59db1a34aac0c3775d6263662821885ea7fd7492c073298f57e9&w=996",
//       name: "Dr. Victor Nguyen",
//       specialties: "Neurologist",
//     },
//     {
//       img: "https://img.freepik.com/premium-photo/adult-man-trains-muscle-strength-with-professional-doctor-modern-rehabilitation-clinic-phy_136615-520.jpg?w=1060",
//       name: "Dr. Ethan Carter",
//       specialties: "Dermatologist",
//     },
//     {
//       img: "https://img.freepik.com/premium-photo/patient-sitting-showing-spine-model-where-she-feels-pain_232070-2095.jpg?w=996",
//       name: "Dr. Olivia Martinez",
//       specialties: "Ophthalmologist",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/woman-having-physiotherapy-session_23-2149115643.jpg?t=st=1732008208~exp=1732011808~hmac=0ca323bf92d90ad62756a8193cff305dd3896bf81a3b9291995bdd08fb785b62&w=996",
//       name: "Dr. Sophia Lee",
//       specialties: "Physiotherapist",
//     },
//     {
//       img: "https://img.freepik.com/premium-photo/young-female-doctor-examining-patient-medical-office_109710-355.jpg?w=996",
//       name: "Dr. James Hamilton",
//       specialties: "Physiotherapist",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/physiotherapist-helping-female-patient-her-clinic_23-2149115563.jpg?t=st=1732008255~exp=1732011855~hmac=017b4ffc98bbe086a3fd26156ce5c2be635c4263166b70ab2ebb30070b7d2b42&w=996",
//       name: "Dr. Emma Clark",
//       specialties: "Physiotherapist",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071463.jpg?t=st=1732008329~exp=1732011929~hmac=700e68987b658189d8f8dea60988cb82be3f52b664e1e5797eae66f275b76327&w=996",
//       name: "Dr. Noah Williams",
//       specialties: "Physiotherapist",
//     },
//   ];

//   const slider = useRef(null);

//   const settings = {
//     accessibility: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1023,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
//       <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
//         <div>
//           <h1 className="text-4xl font-semibold text-center lg:text-start">
//             Our Doctors
//           </h1>
//           <p className="mt-2 text-center lg:text-start">
//             Our team of expert physiotherapists are here to help you recover and
//             improve your health.
//           </p>
//         </div>
//         <div className="flex gap-5 mt-4 lg:mt-0">
//           <button
//             className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
//             onClick={() => slider.current.slickPrev()}
//           >
//             <FaArrowLeft size={25} />
//           </button>
//           <button
//             className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
//             onClick={() => slider.current.slickNext()}
//           >
//             <FaArrowRight size={25} />
//           </button>
//         </div>
//       </div>
//       <div className="mt-5">
//         <Slider ref={slider} {...settings}>
//           {data.map((e, index) => (
//             <div
//               className="h-[350px] text-black rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl mb-4 cursor-pointer"
//               key={index}
//             >
//               <div>
//                 <img
//                   src={e.img}
//                   alt="img"
//                   className="h-56 rounded-t-xl w-full object-cover"
//                 />
//               </div>

//               <div className="flex flex-col justify-center items-center py-4 px-2">
//                 <h1 className="font-semibold text-xl">{e.name}</h1>
//                 <h3 className="text-sm text-gray-600">{e.specialties}</h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Doctors;




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
