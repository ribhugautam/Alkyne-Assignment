import React from "react";
import heroImage from "/groupPhoto.png";
import Header from "./components/Header";
import believe from "/believe.svg";
import stayconnected from "/stayconnected.png";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import image6 from "/6.png";
import image7 from "/7.png";
import image8 from "/8.png";
import testimonial from "/testimonial.png";
import map from "/map.png";
function App() {
  return (
    <>
      <Header />
      {/* hero section */}
      <div className="relative w-full h-dvh bg-cyan-300">
        <img
          src={heroImage}
          alt="heroImage"
          className="w-full brightness-75 hover:brightness-100 transition-all duration-200 h-full object-top object-cover"
        />
        <div className="absolute bottom-[18%] left-[5%]">
          <span className="  text-white font-inter text-lg leading-9">
            Home / Why work with us
          </span>
          <h1 className="font-oswald font-extralight text-[64px] leading-[89.6px] text-white">
            Headline #1
          </h1>
          <p className="font-inter text-lg leading-9 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* navigation */}
      <div className=" flex flex-row w-full text-left font-inter text-2xl h-[160px] bg-[#112C41] ">
        <div className="w-[33%] border-r border-[#000000] h-full px-8 ml-12 flex flex-col justify-center items-center">
          <span className=" text-[#6B6B6B] w-full">01</span>
          <div className="flex w-full text-white flex-row gap-3 justify-between items-center">
            <p>We stay connected</p>
            <button className="border rounded-full p-3 px-4 ">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.67L7 6.835L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[33%] border-r border-[#000000] h-full px-8 ml-4 flex flex-col justify-center items-center">
          <span className=" text-[#6B6B6B] w-full">02</span>
          <div className="flex w-full text-white flex-row gap-3 justify-between items-center">
            <p className="w-full">We believe in diversity & inclusion</p>
            <button className="border rounded-full p-3 px-4 ">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.67L7 6.835L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[33%] h-full px-8 flex flex-col justify-center items-center">
          <span className=" text-[#6B6B6B] w-full">03</span>
          <div className="flex w-full text-white flex-row gap-3 justify-between items-center">
            <p className="w-full">We celebrate success</p>
            <button className="border rounded-full p-3 px-4 ">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.67L7 6.835L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Stay Connected */}
      <div className="flex flex-row h-[130dvh] w-full">
        <div className="w-[50%] flex flex-col gap-12  px-20 py-20 ">
          <h1 className="font-oswald font-extralight text-[64px] leading-[89.6px] text-[#112C41]">
            We <span className="text-[#F36F2B]">Stay connected</span>
          </h1>
          <div className="flex flex-row gap-8">
            <div>
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H42.6667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.5833 1V23.9167C40.5833 25.0217 40.1443 26.0815 39.3629 26.8629C38.5815 27.6443 37.5217 28.0833 36.4166 28.0833H7.24998C6.14491 28.0833 5.0851 27.6443 4.3037 26.8629C3.5223 26.0815 3.08331 25.0217 3.08331 23.9167V1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4166 38.4997L21.8333 28.083L32.25 38.4997"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4 w-[543px]">
              <span className="flex justify-between text-2xl font-medium items-center">
                Quarterly Business Updates{" "}
                <div className="w-[40%] h-2 bg-[#F36F2B] -mr-[5rem]  " />
              </span>
              <p className="text-[#6B6B6B] font-inter font-normal text-lg">
                We strive to stay connected as a team through communication and
                collaboration. This materialises every quarter through our
                Quarterly Business Update events. These gatherings are immersive
                sessions where every team member, regardless of rank or tenure,
                comes together to contribute to our overarching business
                strategy, and stay connected. They are opportunities to learn
                from our seasoned leaders and to also share personal insights
                and achievements that can steer our collective future. In an
                ever-evolving engineering landscape, staying connected isn’t
                just a benefit—it’s essential.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 15.5833C26 16.6884 25.561 17.7482 24.7796 18.5296C23.9982 19.311 22.9384 19.75 21.8333 19.75H9.33333L1 28.0833V5.16667C1 2.875 2.875 1 5.16667 1H21.8333C22.9384 1 23.9982 1.43899 24.7796 2.22039C25.561 3.00179 26 4.0616 26 5.16667V15.5833Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.3334 15.583H38.5C39.6051 15.583 40.6649 16.022 41.4463 16.8034C42.2277 17.5848 42.6667 18.6446 42.6667 19.7497V42.6663L34.3334 34.333H21.8334C20.7283 34.333 19.6685 33.894 18.8871 33.1126C18.1057 32.3312 17.6667 31.2714 17.6667 30.1663V28.083"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="flex justify-between text-2xl font-medium items-center">
              Industry Events & Networking
            </span>
          </div>

          <div className="flex flex-row gap-8">
            <div>
              <svg
                width="36"
                height="44"
                viewBox="0 0 36 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 37.4583V6.20833C1 4.827 1.54873 3.50224 2.52549 2.52549C3.50224 1.54873 4.827 1 6.20833 1H34.3333V42.6667H6.20833C4.827 42.6667 3.50224 42.1179 2.52549 41.1412C1.54873 40.1644 1 38.8397 1 37.4583ZM1 37.4583C1 36.077 1.54873 34.7522 2.52549 33.7755C3.50224 32.7987 4.827 32.25 6.20833 32.25H34.3333"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="flex justify-between text-2xl font-medium items-center">
              Associations Memberships
            </span>
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img
            src={stayconnected}
            alt="stayconnected"
            className="w-full h-full brightness-75 hover:brightness-100 transition-all duration-200 object-cover"
          />
        </div>
      </div>
      {/* believe in diversity */}
      <div className="flex relative text-white flex-col bg-[#112C41] h-[150dvh] w-ful pt-20 px-16">
        <div className="flex flex-row justify-between">
          <h1 className="text-6xl w-[505px] font-oswald font-extralight ">
            We believe in{" "}
            <span className="text-[#F36F2B]">diversity & inclusion</span>
          </h1>
          <p className="text-lg font-normal w-[734px] font-inter h-[556px] overflow-hidden">
            At CaSE we do not just accept difference — we celebrate it, we
            support it, and we thrive on it for the benefit of our employees,
            our services, our industry and our community. We are proud to be an
            equal opportunity employer. Guided by our values and beliefs, we
            foster an inclusive workplace culture where employees thrive because
            of their differences, not in spite of them. Our values and beliefs,
            we foster an inclusive workplace culture where employees thrive
            because of their differences, not in spite of them Our Commitment to
            reinventing the standard. With more than 20 nationalities
            represented in our global workforce, we firmly believe that our
            ability to deliver high-quality results is fueled by our active
            efforts to embed diversity and inclusion. We recognise, respect, and
            strive to create an environment where employees can excel and feel a
            true sense of belonging.
            <br />
            <br />
            <span className="font-bold text-[24px] ">
              Some of our strategic initiatives include:
            </span>
          </p>
        </div>
        <img
          src={believe}
          alt="believe"
          className="absolute bottom-0 right-0 left-0 "
        />
      </div>
      {/* we celebrate success */}
      <div className="grid grid-cols-6 gap-4 px-8 py-20  ">
        <img
          src={image1}
          alt="image1"
          className="object-cover h-full col-span-3 w-[802px]"
        />
        <img
          src={image2}
          alt="image2"
          className="object-cover h-full col-span-2 w-[523px]"
        />
        <img
          src={image3}
          alt="image3"
          className="object-cover row-span-2 col-span-1 h-full w-full"
        />
        <img
          src={image4}
          alt="image4"
          className="object-cover row-span-2 col-span-2 h-full w-full"
        />
        <div className=" flex flex-col w-full h-full col-span-3 gap-4 p-16">
          <h1 className="text-6xl w-[428px] font-oswald font-extralight">
            We celebrate <span className="text-[#F36F2B]">success</span>
          </h1>
          <p className="text-lg font-normal w-[600px] font-inter h-[120px] overflow-hidden">
            At CaSE we understand that every achievement, big or small, is a
            result of the hard work and dedication of our team members. We take
            pride in celebrating these moments because they underscore the
            commitment and effort put into each project.
          </p>
          <p className="text-lg font-normal w-[600px] font-inter h-[120px] overflow-hidden ">
            Some of our favourite events on the calendar include our coveted
            Melbourne Cup event and our always amazing Christmas Party.
            In-between, our team celebrate together during team cycling events,
            regular team dinners and social morning teas to celebrate milestones
            and special days. Taking the time to celebrate wins is our way of
            showing gratitude and ensuring everyone knows their efforts make a
            difference.
          </p>
        </div>
        <img
          src={image5}
          alt="image5"
          className="object-cover col-span-4 h-full w-full"
        />
        <div className=" flex flex-col col-span-3 w-full h-full gap-4 p-16">
          <h1 className="text-6xl w-[458px] font-oswald font-extralight">
            We celebrate <span className="text-[#F36F2B]">success</span>
          </h1>
          <p className="text-lg font-normal w-[600px] font-inter h-[120px] overflow-hidden">
            At CaSE we understand that every achievement, big or small, is a
            result of the hard work and dedication of our team members. We take
            pride in celebrating these moments because they underscore the
            commitment and effort put into each project.
          </p>
          <p className="text-lg font-normal w-[600px] font-inter h-[120px] overflow-hidden ">
            Some of our favourite events on the calendar include our coveted
            Melbourne Cup event and our always amazing Christmas Party.
            In-between, our team celebrate together during team cycling events,
            regular team dinners and social morning teas to celebrate milestones
            and special days. Taking the time to celebrate wins is our way of
            showing gratitude and ensuring everyone knows their efforts make a
            difference.
          </p>
        </div>
        <img
          src={image6}
          alt="image6"
          className="object-cover col-span-3 h-full w-full"
        />
        <img
          src={image7}
          alt="image7"
          className="object-cover col-span-4 h-full w-full"
        />
        <img
          src={image8}
          alt="image8"
          className="object-cover col-span-2 h-full w-full"
        />
      </div>
      {/* testimonials */}
      <div className="flex relative flex-row justify-between gap-20 w-full items-center px-16 bg-[#112C41] h-dvh py-20 ">
        <div>
          <img src="/testimonial.png" alt="testimonial" />
        </div>
        <div>
          <div className="flex flex-row gap-6">
            <div>
              <svg
                width="38"
                height="35"
                viewBox="0 0 38 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.3 2.00112C29.2 2.00112 22.4 3.70112 22.4 15.6011V29.2011C22.4 31.3261 23.6852 32.63 25.8 32.6011H32.6C34.725 32.6011 36 31.3261 36 29.2487V19.0011C36 16.8761 34.725 15.6011 32.6 15.6011C30.9 15.6011 30.9 15.6011 30.9 13.9011V12.2011C30.9 10.5011 32.6 8.80111 34.3 8.80111C36 8.80111 36 8.78751 36 7.04841L36 3.70112C36 2.00112 36 2.00112 34.3 2.00112Z"
                  fill="#F36F2B"
                  stroke="#F36F2B"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9 2.00112C8.80003 2.00112 2.00003 3.70112 2.00003 15.6011L2.00003 29.2011C2.00003 31.3261 3.28693 32.63 5.40003 32.6011H12.2C14.325 32.6011 15.6 31.3261 15.6 29.2487L15.6 19.0011C15.6 16.8761 14.325 15.6011 12.2 15.6011H10.925C10.925 11.7761 10.5 8.80111 15.6 8.80111V3.70112C15.6 2.00112 15.6 2.00112 13.9 2.00112Z"
                  fill="#F36F2B"
                  stroke="#F36F2B"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg font-inter text-white ">
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu
              sed blandit. In consequat euismod purus nec imperdiet.
              <br />
              <br />
              Title
              <br />
              Name
            </p>
          </div>
          <div className="flex mt-6 items-center flex-row gap-6">
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.2 18H24.8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 24.8L24.8 18L18 11.2"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-lg font-inter text-white ">Read my story</p>
          </div>
        </div>
        <div className="absolute cursor-pointer bottom-36 right-12" >
          <svg
            width="121"
            height="52"
            viewBox="0 0 121 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="69.5"
              y="0.5"
              width="51"
              height="51"
              rx="25.5"
              stroke="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="51"
              height="51"
              rx="25.5"
              stroke="white"
            />
            <path
              d="M29 31.67L23 25.835L29 20"
              stroke="#F36F2B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M95 31.67L101 25.835L95 20"
              stroke="#F36F2B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* 2nd section */}
      <div className="flex flex-col items-center justify-center gap-12 p-20">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[1020px] ">
          <span className="text-[42px] leading-[50.83px] text-center font-inter text-black">
            As a <span className="text-[#F36F2B]">global business,</span> we
            encourage you to contact us no matter where you are located in the
            world.
          </span>
          <p className="text-lg font-inter text-black">
            Browse our job opportunities across the globe.
          </p>
        </div>
        <div className="flex flex-row items-center gap-8">
          <span className="text-[24] font-inter text-[#F36F2B] ">
            OPEN ROLES
          </span>
          <button>
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23.5" cy="23.5" r="23" stroke="#D9D9D9" />
              <path
                d="M16 24.6133H30"
                stroke="#F36F2B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 17.5L30 24.6136L23 31.7273"
                stroke="#F36F2B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <img src={map} alt="map" className="mt-20" />
      </div>
      {/* 3rd section */}
      <div className=" flex font-inter text-white flex-row w-full bg-[#000000]">
        <div className="flex flex-col border-r pr-32 pt-20 p-12 gap-8">
          <div>
            <svg
              width="128"
              height="78"
              viewBox="0 0 128 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50.7957 14.4218C50.7957 3.34301 50.8107 0.108394 50.8624 0.0567551C50.9137 0.00550327 52.2055 -0.00660545 56.4664 0.00423097L62.0037 0.0183297L62.0177 14.02L62.0316 28.0216H63.4151H64.7986L64.8126 14.02L64.8265 0.0183297L70.3959 0.00423097C75.0266 -0.00749006 75.9757 0.00279214 76.0274 0.0650463C76.0731 0.120002 76.0933 3.94731 76.1036 14.4263L76.1175 28.7127L76.4219 28.7476C76.5894 28.7668 77.1652 28.8391 77.7014 28.9083C78.2377 28.9776 78.7172 29.0187 78.7669 28.9996C78.8499 28.9678 78.8573 28.2337 78.8573 19.8958V10.8266L84.4336 10.8407L90.0099 10.8548L90.0239 21.1178C90.035 29.2384 90.0523 31.3919 90.1069 31.4337C90.1449 31.4628 90.3444 31.5308 90.5502 31.5849C90.756 31.639 90.938 31.7053 90.9548 31.7322C90.9714 31.7592 91.0365 31.7812 91.0994 31.7812C91.2024 31.7812 92.8949 32.3221 93.1648 32.4413C93.2256 32.4682 93.4622 32.5525 93.6906 32.6288C94.1493 32.782 94.7899 33.0208 95.0466 33.1344C95.1379 33.1748 95.3945 33.2769 95.6167 33.3613C95.839 33.4458 96.0335 33.5353 96.049 33.5603C96.0644 33.5853 96.1145 33.6057 96.1603 33.6057C96.2061 33.6057 96.3976 33.6778 96.586 33.7659C96.7743 33.854 97.1277 34.0168 97.3712 34.1277C98.0545 34.4391 99.4663 35.1422 99.9077 35.3911C101.85 36.486 103.012 37.2761 104.316 38.3881C105.088 39.0464 106.358 40.4208 106.584 40.843C106.626 40.9225 106.615 40.9619 106.57 40.9612C105.632 40.0482 104.372 39.0952 102.792 38.3944C101.924 37.9227 100.607 37.258 99.8342 36.9108C99.287 36.665 98.4812 36.3279 98.3398 36.2856C98.2637 36.2629 98.0723 36.1855 97.9144 36.1137C97.7565 36.0419 97.6114 35.9831 97.592 35.9831C97.5725 35.9831 97.3032 35.8875 96.9935 35.7707C96.6837 35.6539 96.3307 35.5274 96.2089 35.4896C96.0871 35.4518 95.8819 35.3733 95.7529 35.315C95.6238 35.2567 95.498 35.2091 95.4732 35.2091C95.4484 35.2091 95.1555 35.1224 94.8222 35.0165C93.4605 34.5838 92.7828 34.3847 91.7038 34.1003C91.357 34.0089 91.0538 33.9221 91.0301 33.9075C91.0064 33.8929 90.8543 33.8562 90.6922 33.826C90.53 33.7958 90.1732 33.7102 89.8992 33.6358C89.2911 33.4706 88.0977 33.1958 87.3602 33.0512C87.0596 32.9922 86.6611 32.9079 86.4746 32.8639C86.2881 32.8199 85.8242 32.7312 85.4437 32.6668C85.0632 32.6025 84.6522 32.5247 84.5304 32.4939C84.4087 32.4631 84.2343 32.4281 84.143 32.4161C83.7118 32.3594 83.0969 32.2602 82.5933 32.166C82.2888 32.1091 81.8192 32.0355 81.5497 32.0025C81.2801 31.9695 80.8567 31.9095 80.6087 31.8691C80.3608 31.8288 80.061 31.7914 79.9425 31.7862C79.824 31.781 79.6824 31.7529 79.6279 31.7237C79.5734 31.6945 79.4365 31.6706 79.3238 31.6706C79.2111 31.6706 78.9044 31.6456 78.6421 31.615C78.3799 31.5843 77.6273 31.496 76.9694 31.4187C76.3117 31.3414 75.5853 31.2679 75.3554 31.2553C75.1254 31.2428 74.5428 31.1941 74.0607 31.1472C73.5785 31.1003 72.9848 31.0501 72.7413 31.0357C72.4977 31.0212 72.1615 30.9976 71.9941 30.9832C71.4996 30.9407 69.2298 30.828 68.4661 30.808C67.5477 30.784 59.1718 30.784 58.2534 30.808C57.4908 30.8279 55.2211 30.9406 54.7255 30.9832C54.558 30.9975 54.2592 31.0196 54.0613 31.0322C53.6354 31.0592 53.2011 31.096 52.3732 31.1751C52.0383 31.2072 51.5802 31.2434 51.3552 31.2557C51.1302 31.268 50.4079 31.3414 49.7501 31.4187C49.0923 31.496 48.3396 31.5843 48.0774 31.615C47.8152 31.6456 47.5026 31.6706 47.3828 31.6706C47.2629 31.6706 47.1412 31.693 47.1123 31.7204C47.0834 31.7478 46.8854 31.7855 46.6723 31.8042C46.277 31.8389 45.7167 31.9198 44.486 32.12C44.1055 32.1819 43.4953 32.2795 43.13 32.3368C42.7647 32.3942 42.2043 32.4915 41.8847 32.5531C41.565 32.6147 41.2164 32.6769 41.1098 32.6914C40.842 32.7277 40.4423 32.8093 39.9198 32.9344C39.6763 32.9926 39.3525 33.0567 39.2003 33.0768C39.0481 33.0968 38.8115 33.1478 38.6745 33.1898C38.3442 33.2913 38.0534 33.3626 37.6506 33.4408C37.4679 33.4762 37.0943 33.5629 36.8203 33.6333C36.5464 33.7036 36.1728 33.7983 35.9901 33.8436C35.4262 33.9835 34.3951 34.2597 34.1913 34.3255C34.0847 34.3598 33.7859 34.4453 33.5271 34.5152C33.2684 34.5852 32.9446 34.6807 32.8076 34.7276C32.6706 34.7744 32.4589 34.8417 32.3371 34.8772C32.2154 34.9127 31.9912 34.9882 31.839 35.045C31.6868 35.1018 31.4128 35.1909 31.2302 35.243C31.0475 35.2951 30.8732 35.3541 30.8427 35.374C30.8123 35.394 30.6753 35.4425 30.5383 35.4818C30.4013 35.5212 30.2394 35.5727 30.1785 35.5962C30.1177 35.6199 29.8188 35.7318 29.5144 35.8451C29.21 35.9584 28.8553 36.0979 28.7263 36.1553C28.5972 36.2126 28.4653 36.2595 28.4331 36.2595C28.4009 36.2595 28.1884 36.3466 27.9609 36.453C27.7333 36.5595 27.5272 36.6465 27.5027 36.6465C27.4784 36.6465 27.3042 36.7212 27.1156 36.8124C26.9271 36.9036 26.7597 36.9783 26.7436 36.9783C26.6783 36.9783 24.6328 38.0005 24.1375 38.2807C23.8449 38.4462 23.5958 38.5816 23.5838 38.5816C23.5629 38.5816 23.4269 38.6654 22.8123 39.057L22.7898 39.0649C22.7039 39.1215 22.609 39.1848 22.5071 39.2537C22.0091 39.5787 21.605 39.8637 21.3884 40.0399C21.2713 40.1256 21.1538 40.2126 21.0378 40.3001C20.9813 40.3029 20.9669 40.3141 20.999 40.3294C20.7378 40.527 20.4846 40.7262 20.259 40.9154C20.2553 40.9166 20.2515 40.9176 20.2477 40.9186C20.082 40.9619 20.1655 40.8116 20.5166 40.4347C21.1778 39.7246 21.5311 39.3935 22.4144 38.6558C22.9308 38.2246 24.3613 37.2037 24.9759 36.8277C25.731 36.3658 26.677 35.809 26.7567 35.7796C26.8122 35.7591 26.8701 35.7281 26.8853 35.7107C26.9395 35.6487 29.11 34.5485 29.5144 34.3781C29.5753 34.3525 29.8119 34.2463 30.0402 34.1423C30.691 33.8457 30.7976 33.8003 31.5623 33.4936C31.958 33.3349 32.3565 33.1726 32.4478 33.1329C32.5392 33.0933 32.7384 33.0192 32.8906 32.9684C33.0428 32.9176 33.2421 32.8426 33.3334 32.8018C33.4247 32.761 33.6987 32.6606 33.9422 32.5787C34.1858 32.4968 34.8164 32.2839 35.3438 32.1055C35.8712 31.9272 36.3353 31.7812 36.3753 31.7812C36.4152 31.7812 36.5192 31.7442 36.6065 31.6991L36.765 31.6169L36.7927 21.2358L36.8203 10.8548L42.3794 10.8407C46.7901 10.8295 47.9476 10.8409 47.9826 10.8959C48.0068 10.9341 48.027 15.0549 48.0275 20.0533L48.0283 29.1412L48.2082 29.1047C48.3071 29.0847 48.5749 29.0442 48.8032 29.0147C49.8667 28.8777 50.1274 28.841 50.4498 28.7827L50.7957 28.7201V14.4218ZM36.765 35.2428L36.7794 37.7661L36.7938 40.2955H38.5861C40.1694 40.2955 40.3824 40.2854 40.412 40.2081C40.4305 40.16 40.4456 38.8543 40.4456 37.3065V34.5041C39.1953 34.7268 37.9664 34.9726 36.765 35.2428ZM44.3745 33.8874L44.3887 37.0702L44.403 40.2679H46.2018H48.0007L48.0149 36.8262C48.0245 34.4976 48.0378 33.6544 48.076 33.4427C46.8317 33.5721 45.5962 33.72 44.3745 33.8874ZM50.7539 33.1931C50.7795 33.4715 50.7957 34.7806 50.7957 36.6453C50.7957 38.5567 50.8109 40.16 50.8293 40.2081C50.859 40.2853 51.069 40.2955 52.6222 40.2955C54.1754 40.2955 54.3854 40.2853 54.4151 40.2081C54.4336 40.16 54.4487 38.4721 54.4487 36.4572V32.9382C53.2153 33.007 51.9821 33.0916 50.7539 33.1931ZM58.3781 32.7715L58.3919 36.4584L58.4061 40.2679H60.2049H62.0037L62.0314 36.4254L62.0582 32.7062C60.8395 32.7138 59.6112 32.7352 58.3781 32.7715ZM64.7721 32.7119L64.7988 36.4254L64.8265 40.2679H66.6253H68.4241L68.4518 36.4807L68.4787 32.7922C67.261 32.7521 66.0237 32.7249 64.7721 32.7119ZM72.3551 32.9664L72.3829 36.536C72.3988 38.5885 72.4175 40.2741 72.4244 40.2817C72.4313 40.2894 73.2437 40.2955 74.2298 40.2955C75.8136 40.2955 76.0266 40.2854 76.0563 40.2081C76.0747 40.16 76.0899 38.5567 76.0899 36.6453C76.0899 34.9854 76.104 33.579 76.1226 33.2285C74.9026 33.128 73.6444 33.0401 72.3551 32.9664ZM78.7758 33.4728C78.7809 33.4767 78.7849 33.4806 78.7881 33.4845C78.8417 33.552 78.8573 34.3272 78.8573 36.9335V40.2955H80.6284H82.3995V37.0822V33.8986C81.2497 33.7445 80.0387 33.6019 78.7758 33.4728ZM86.3837 34.5227L86.3979 37.3841L86.4123 40.2679H88.2111H90.0099L90.0243 37.7317L90.038 35.3189C88.9778 35.0398 87.7513 34.7725 86.3837 34.5227ZM57.9099 5.2045C57.7882 5.06279 57.5576 4.89594 57.3176 4.77602C56.9515 4.59307 56.8899 4.57975 56.42 4.58212C55.9879 4.58428 55.8677 4.60672 55.5834 4.73842C55.1664 4.93149 54.8084 5.28218 54.6212 5.68097L54.4764 5.98942L54.4622 17.1714L54.4479 28.3534L54.6005 28.3535C54.6844 28.3536 55.0769 28.3295 55.4727 28.2998C55.8684 28.2702 56.6841 28.2159 57.2853 28.1792L58.3784 28.1123V17.0949C58.3784 8.97225 58.3618 6.03691 58.3153 5.92291C58.1492 5.5161 58.0952 5.4204 57.9099 5.2045ZM72.2269 5.64138C72.0216 5.2573 71.7326 4.98191 71.317 4.77419C70.955 4.59329 70.8921 4.57975 70.4231 4.58212C69.99 4.58428 69.8715 4.60656 69.5864 4.7392C69.1763 4.93005 68.8356 5.26504 68.6334 5.67627L68.4795 5.98942L68.4649 17.0523L68.4502 28.1152L69.1014 28.1527C69.4595 28.1734 70.1884 28.2137 70.7211 28.2422C71.2538 28.2707 71.8456 28.3104 72.0363 28.3302L72.3828 28.3664L72.3683 17.1226L72.3538 5.87884L72.2269 5.64138ZM44.1816 16.4679C43.9678 16.0781 43.6784 15.7897 43.3118 15.6009C43.0634 15.4731 42.9401 15.4482 42.4935 15.4359C42.2043 15.4279 41.8888 15.4414 41.7924 15.466C41.2739 15.5983 40.6877 16.1657 40.5345 16.6839C40.455 16.9523 40.4456 17.7027 40.4456 23.7712C40.4456 27.5041 40.4643 30.5691 40.4871 30.5823C40.5099 30.5955 40.6656 30.5744 40.8331 30.5354C41.8106 30.3077 42.8972 30.066 43.1854 30.0121C43.368 29.978 43.5922 29.929 43.6835 29.9034C43.7748 29.8777 43.9404 29.8412 44.0516 29.8223C44.1627 29.8034 44.2815 29.7542 44.3158 29.713C44.3613 29.6582 44.374 27.9077 44.3628 23.2043L44.3477 16.7706L44.1816 16.4679ZM86.2186 16.4941C86.0414 16.1401 85.7119 15.7992 85.3607 15.6065C85.1196 15.4742 85.0126 15.4525 84.5304 15.4385C83.9101 15.4204 83.8162 15.4381 83.4235 15.6463C82.9517 15.8966 82.6265 16.3423 82.4619 16.9641C82.4124 17.151 82.4 18.7591 82.4117 23.4327L82.4272 29.6526L82.787 29.716C82.9848 29.7509 83.2837 29.8096 83.4511 29.8465C83.8665 29.938 84.157 29.9956 84.4197 30.0387C84.6433 30.0753 85.634 30.3017 86.0036 30.4007C86.1137 30.4302 86.2448 30.4543 86.295 30.4543C86.3794 30.4543 86.3852 29.9385 86.3716 23.6124L86.3569 16.7706L86.2186 16.4941ZM4.18622 49.5659C5.14873 49.0688 6.22386 48.753 7.31411 48.6472C7.56074 48.6232 12.445 48.6065 18.168 48.61L28.5735 48.6164L28.588 50.8228C28.601 52.8172 28.5935 53.0391 28.5102 53.1311C28.4212 53.2293 28.0696 53.2329 18.7218 53.2329C9.2151 53.2329 9.01712 53.2351 8.59387 53.3432C7.90008 53.5205 7.59445 53.6973 7.06272 54.2293C6.4788 54.8135 6.20599 55.3287 6.00911 56.2185C5.90036 56.7101 5.88071 56.9556 5.88071 57.8218C5.88071 58.7661 5.89277 58.8913 6.038 59.4528C6.36605 60.7211 6.97278 61.5384 7.92632 61.9964C8.25841 62.1559 8.56061 62.2567 8.82479 62.296C9.09655 62.3366 12.27 62.3554 18.8276 62.3554H28.4325L28.5175 62.485C28.5908 62.5967 28.6005 62.908 28.588 64.7639L28.5735 66.9134L28.4351 66.9833C28.2742 67.0646 17.3838 67.0754 10.8344 67.0009C7.2333 66.9598 7.01523 66.9517 6.48954 66.8371C5.34759 66.5883 4.35127 66.181 3.44262 65.5916C1.79668 64.5239 0.59922 62.5479 0.207189 60.2526C-0.203439 57.8485 0.00538897 55.2104 0.752921 53.3574C1.41804 51.7088 2.63105 50.3693 4.18622 49.5659ZM31.8667 52.9565V50.7714V48.5862L43.6143 48.6013L55.362 48.6164L55.9431 48.7455C57.4531 49.0811 58.6254 49.707 59.5344 50.663C60.426 51.6005 60.8405 52.5209 60.9889 53.8918C61.0231 54.2086 61.0569 56.947 61.0728 60.7016L61.0994 66.9816L54.6958 67.0204C47.5105 67.0641 35.7744 67.0165 35.1171 66.9412C33.6321 66.7709 32.2338 65.9334 31.4298 64.7327C30.4331 63.2443 30.2258 60.776 30.9404 58.9067C31.5634 57.2771 32.9179 56.2134 34.9108 55.7889C35.2807 55.7101 36.4264 55.6984 45.4131 55.6812L55.5003 55.6619L55.4985 55.4841C55.4839 54.0482 54.7959 53.1736 53.5542 53.0126C53.3095 52.9809 48.9181 52.9592 42.5074 52.9582L31.8667 52.9565ZM65.9748 50.9567C66.7381 49.7647 68.2999 48.8301 69.8355 48.6463C70.0334 48.6226 75.6307 48.6 82.2739 48.596L94.3526 48.5887L94.383 48.7131C94.3996 48.7815 94.4063 49.7581 94.3979 50.8832L94.3824 52.9288L82.8423 52.9565L71.3022 52.9841L71.0255 53.112C70.457 53.3749 70.2569 53.6789 70.2543 54.2834C70.2529 54.6169 70.2795 54.7516 70.39 54.9716C70.5643 55.3186 70.7108 55.4227 71.2222 55.5626C71.6277 55.6735 71.7837 55.6756 80.9005 55.6975C86.6355 55.7112 90.3357 55.7409 90.6103 55.7753C91.8211 55.9269 93.2282 56.6126 93.9729 57.4138C94.902 58.4135 95.4063 59.8234 95.4063 61.4208C95.4063 62.492 95.2079 63.3611 94.7512 64.29C94.5334 64.7328 94.411 64.8979 93.9673 65.3468C93.0631 66.2616 92.0348 66.7839 90.836 66.9372C90.1651 67.023 65.5405 67.0851 65.3257 67.0015C65.2351 66.9663 65.142 66.9079 65.1191 66.8717C65.096 66.8356 65.0769 65.9166 65.0764 64.8295C65.0756 62.9261 65.0797 62.8489 65.1863 62.7424C65.2962 62.6326 65.3707 62.6319 77.0834 62.6319C89.1274 62.6319 89.2096 62.6305 89.6225 62.4253C90.1512 62.1625 90.3954 61.4685 90.1946 60.7991C90.1144 60.5317 89.69 60.1235 89.3946 60.0295C89.2298 59.977 87.0056 59.9509 79.8535 59.9174C73.5874 59.888 70.3484 59.8532 69.9821 59.8115C68.6627 59.661 67.4033 59.0886 66.6161 58.2815C66.3277 57.9858 65.6844 57.0911 65.6844 56.9857C65.6844 56.9608 65.625 56.8091 65.5523 56.6486C65.4797 56.488 65.3491 56.083 65.2622 55.7485C65.1176 55.1923 65.1042 55.06 65.1065 54.2005C65.1088 53.3161 65.1196 53.2217 65.2886 52.604C65.4866 51.8802 65.6787 51.419 65.9748 50.9567ZM105.287 48.7481C105.41 48.7172 105.734 48.6722 106.007 48.6481C106.28 48.6239 111.217 48.6007 116.978 48.5964L127.453 48.5887V50.7713V52.9539L117.421 52.9698L107.389 52.9859L106.943 53.136C106.332 53.3413 105.888 53.6415 105.52 54.0979C105.209 54.4833 104.539 55.519 104.539 55.6136C104.539 55.6459 108.885 55.6656 115.997 55.6656H127.454L127.44 57.7527L127.425 59.8398L115.981 59.8675L104.536 59.8951L104.75 60.3374C105.404 61.6862 106.011 62.2078 107.306 62.535C107.485 62.5803 110.34 62.6066 117.49 62.6287L127.425 62.6595L127.44 64.8206L127.454 66.9817L122.304 67.0204C116.146 67.0668 106.819 67.0192 105.923 66.9369C104.01 66.7613 102.042 65.8405 100.885 64.581C99.3926 62.9546 98.6165 60.5968 98.6165 57.6875C98.6165 54.2764 99.8619 51.4927 102.039 50.0384C102.834 49.507 103.922 49.0387 104.76 48.8667C104.928 48.8323 105.165 48.779 105.287 48.7481ZM55.445 62.6319V61.2497V59.8675L46.4924 59.8731C39.6721 59.8775 37.4673 59.8948 37.2354 59.9462C36.8367 60.0345 36.5391 60.1799 36.4027 60.3531C36.1103 60.7245 36.0486 61.5986 36.2876 61.9849C36.4429 62.2359 36.7843 62.4657 37.1381 62.5574C37.3735 62.6184 39.0599 62.6319 46.4353 62.6319H55.445ZM0.871698 70.2635C1.14174 69.9876 1.40553 69.8412 1.77205 69.7636C2.0618 69.7022 2.78475 69.7421 3.04788 69.8339C3.36707 69.9452 3.72927 70.2345 3.88784 70.5048C4.11145 70.8859 4.1912 71.2681 4.19192 71.9617L4.19259 72.5837H3.55608H2.91958V71.9521C2.91958 71.3551 2.91183 71.3113 2.77789 71.1523C2.51332 70.8383 2.01973 70.875 1.80625 71.2247C1.70867 71.3846 1.70231 71.546 1.70214 73.8665C1.70192 76.5215 1.70596 76.5617 1.98669 76.7068C2.27572 76.8561 2.73106 76.7593 2.84237 76.525C2.86822 76.4706 2.90237 76.0779 2.91831 75.6521L2.94725 74.8781L3.57562 74.8624L4.20404 74.8468L4.18058 75.747C4.16082 76.5051 4.13807 76.6954 4.03667 76.9514C3.88967 77.3227 3.61204 77.624 3.23285 77.8238C2.9674 77.9636 2.90037 77.9741 2.28308 77.9729C1.72052 77.9718 1.57916 77.9533 1.35915 77.8518C0.812974 77.6 0.488246 77.0878 0.373842 76.2975C0.303605 75.8125 0.304767 71.9475 0.375281 71.4503C0.457805 70.8686 0.590917 70.5503 0.871698 70.2635ZM36.1008 70.8304C36.2502 70.3302 36.7824 69.881 37.3609 69.767C37.8299 69.6745 38.4674 69.7381 38.8012 69.9105C39.0461 70.037 39.3922 70.3727 39.5012 70.5895C39.6637 70.9127 39.8195 71.7688 39.7536 71.9762C39.7215 72.077 39.6687 72.0861 39.1136 72.0861H38.5084L38.5042 71.8235C38.497 71.3815 38.3938 71.1329 38.1668 71.0106C38.0035 70.9227 37.9281 70.9124 37.7585 70.9553C37.4416 71.0355 37.3185 71.2409 37.3185 71.6893C37.3185 72.299 37.4758 72.5561 38.4157 73.4829C39.5132 74.5651 39.7471 75.0044 39.7471 75.9839C39.7471 76.8302 39.4945 77.3932 38.9636 77.7295C38.5949 77.9631 38.3373 78.0166 37.7062 77.9907C37.2442 77.9718 37.1057 77.9439 36.8707 77.8226C36.5785 77.6719 36.3023 77.3996 36.1572 77.1193C36.0208 76.8559 35.9088 76.2896 35.9079 75.8595L35.9071 75.4586H36.5368H37.1665L37.1907 75.964C37.2142 76.454 37.2205 76.4742 37.3991 76.6337C37.5645 76.7813 37.6119 76.7953 37.8628 76.7713C38.072 76.7512 38.1723 76.7095 38.2619 76.6054C38.5051 76.323 38.4766 75.7261 38.197 75.2486C38.1205 75.1179 37.6899 74.6452 37.2402 74.1981C36.5753 73.5372 36.3903 73.3182 36.2497 73.026C35.9447 72.3919 35.8873 71.5453 36.1008 70.8304ZM54.3748 70.2062C54.6645 69.942 54.8125 69.8635 55.1682 69.7851C55.7901 69.648 56.4088 69.7388 56.8564 70.0327C57.4184 70.402 57.6224 70.9011 57.6279 71.9202L57.6312 72.556L57.0086 72.5717L56.3859 72.5873L56.3856 72.0741C56.3854 71.7918 56.359 71.4662 56.3268 71.3506C56.2252 70.985 55.7847 70.8163 55.449 71.0144C55.3913 71.0484 55.3445 71.0746 55.3064 71.1101C55.1376 71.2673 55.1384 71.6065 55.1227 73.6065C55.1128 74.8532 55.121 76.0047 55.1407 76.1654C55.1908 76.5727 55.343 76.7367 55.7032 76.7713C55.955 76.7954 56.0012 76.7815 56.1704 76.6306L56.3582 76.4631L56.3773 75.655L56.3964 74.8469L57.0138 74.8625L57.6312 74.8781L57.6488 75.431C57.6903 76.7351 57.405 77.4517 56.6953 77.8257C56.4331 77.964 56.3656 77.9742 55.7217 77.9742C55.0778 77.9742 55.0103 77.964 54.7482 77.8257C54.2816 77.5799 54.027 77.2344 53.872 76.6369C53.747 76.1549 53.7439 71.685 53.8682 71.1583C53.9751 70.7052 54.114 70.4441 54.3748 70.2062ZM91.6361 70.792C91.8523 70.256 92.3084 69.8787 92.8751 69.767C93.6306 69.6181 94.426 69.8197 94.8109 70.2576C94.9039 70.3634 95.0439 70.588 95.122 70.7566C95.2476 71.0278 95.2665 71.1511 95.2861 71.8235L95.3082 72.5837H94.6654H94.0227V71.9521C94.0227 71.3551 94.0149 71.3113 93.881 71.1523C93.6164 70.8383 93.1228 70.875 92.9093 71.2247C92.8118 71.3845 92.8054 71.5456 92.8052 73.8469C92.805 76.5499 92.8103 76.595 93.142 76.7323C93.36 76.8225 93.734 76.7667 93.8786 76.6225C93.9861 76.5151 93.9963 76.4353 94.0124 75.571L94.0298 74.6357L93.7633 74.6186L93.4968 74.6017V73.9935V73.3853H94.3824H95.268L95.2679 75.0163C95.2679 76.5886 95.2633 76.6586 95.141 76.961C94.9873 77.3412 94.6558 77.6957 94.308 77.8522C93.9487 78.0137 93.0837 78.0514 92.6895 77.9226C92.108 77.7326 91.7636 77.3768 91.5867 76.7833C91.4785 76.4206 91.4742 76.2866 91.4889 73.7612C91.5043 71.1231 91.5045 71.118 91.6361 70.792ZM123.819 70.7039C124.094 70.1748 124.471 69.882 125.028 69.7642C125.302 69.7063 125.947 69.7359 126.245 69.8201C126.59 69.9174 126.968 70.2104 127.157 70.5268C127.367 70.8792 127.453 71.3198 127.453 72.051V72.5873L126.83 72.5717L126.208 72.556L126.18 71.945C126.149 71.2655 126.084 71.1008 125.798 70.9825C125.572 70.8889 125.288 70.9483 125.123 71.1238L124.99 71.2656L124.974 73.789C124.963 75.6221 124.977 76.3551 125.024 76.4686C125.201 76.8972 125.967 76.8822 126.119 76.4472C126.153 76.3492 126.18 75.9095 126.18 75.4534V74.6354L125.917 74.6185L125.654 74.6017V73.9935V73.3853H126.54H127.425L127.44 74.819C127.448 75.6285 127.43 76.3855 127.398 76.5578C127.292 77.1347 126.98 77.5664 126.484 77.8237C126.258 77.9415 126.112 77.9717 125.676 77.9908C124.721 78.0327 124.206 77.7786 123.855 77.0927L123.662 76.7137V73.8608V71.008L123.819 70.7039ZM4.96746 77.9466V73.8812V69.8158L5.6178 69.8313L6.26814 69.8469L6.28342 73.7724C6.29178 75.9313 6.28508 77.7537 6.26853 77.8222C6.23942 77.9422 6.21606 77.9466 5.60292 77.9466H4.96746ZM6.93542 70.4617C6.88804 70.1916 6.8493 69.9366 6.8493 69.895C6.8493 69.8351 6.98805 69.8193 7.51242 69.8193C8.15546 69.8193 8.17632 69.823 8.20162 69.9437C8.22963 70.077 8.37851 71.0647 8.56631 72.3625C8.63012 72.8034 8.74392 73.5747 8.81931 74.0764C8.89464 74.5782 8.9843 75.2002 9.01856 75.4586C9.05288 75.7171 9.09787 75.9483 9.11863 75.9723C9.13938 75.9964 9.19706 75.7228 9.24676 75.3642C9.29646 75.0056 9.41264 74.2022 9.50502 73.5788C9.59739 72.9555 9.73443 72.0225 9.80959 71.5056C9.88476 70.9886 9.9716 70.4164 10.0025 70.2339C10.0335 70.0515 10.059 69.8835 10.0592 69.8607C10.0593 69.838 10.3335 69.8193 10.6683 69.8193C11.1186 69.8193 11.2771 69.8373 11.277 69.8884C11.2769 69.9264 11.2142 70.3556 11.1375 70.8421C10.9371 72.1141 10.5596 74.5639 10.3112 76.205C10.233 76.722 10.1366 77.3191 10.0971 77.5319L10.0253 77.9189H9.06052H8.09569L8.05572 77.6702C8.03375 77.5333 7.96346 77.0979 7.89953 76.7026C7.8356 76.3073 7.73565 75.6604 7.67742 75.2651C7.61925 74.8698 7.51021 74.1483 7.43516 73.6618C7.36016 73.1752 7.2364 72.3667 7.16013 71.8649C7.08392 71.3632 6.9828 70.7317 6.93542 70.4617ZM11.8775 77.8794C11.8227 77.7932 11.8146 69.909 11.8692 69.8545C11.8904 69.8333 12.1955 69.8229 12.5472 69.8314L13.1867 69.8469V73.8829V77.9189L12.5546 77.9346C12.0862 77.9463 11.9109 77.932 11.8775 77.8794ZM14.0782 77.8591C14.0311 77.7366 14.0359 69.9016 14.0831 69.8545C14.1043 69.8333 14.4094 69.8229 14.7612 69.8314L15.4006 69.8469L15.4149 73.2609L15.4291 76.675H16.4139C17.106 76.675 17.4184 76.6947 17.4651 76.7413C17.5345 76.8107 17.5605 77.6961 17.4979 77.8591C17.4683 77.9362 17.2655 77.9466 15.788 77.9466C14.3106 77.9466 14.1078 77.9362 14.0782 77.8591ZM20.7163 70.4551C20.7634 70.1814 20.8126 69.9264 20.8255 69.8884C20.843 69.8367 21.0861 69.8193 21.7878 69.8193C22.4238 69.8193 22.6428 69.8039 22.7307 69.9039C22.7886 69.9697 22.7895 70.0857 22.8153 70.2892C22.8345 70.4413 22.9242 71.0259 23.0147 71.5885C23.2829 73.2554 23.4442 74.2622 23.6215 75.3757C23.7136 75.9535 23.838 76.7123 23.898 77.062C23.987 77.5802 24.045 77.7975 23.9631 77.8874C23.8907 77.9668 23.7091 77.9466 23.3431 77.9466C22.9778 77.9466 22.6789 77.9385 22.6789 77.9286C22.6789 77.8575 22.5039 76.6861 22.4776 76.5817C22.4448 76.4512 22.442 76.4508 21.7178 76.4661L20.9908 76.4815L20.8886 77.0896C20.8325 77.4241 20.776 77.7537 20.7631 77.8222C20.7405 77.9417 20.7171 77.9466 20.1627 77.9466C19.8455 77.9466 19.5748 77.9279 19.5611 77.9051C19.5273 77.8486 19.6214 77.2198 20.0798 74.4358C20.1399 74.0709 20.2396 73.4489 20.3014 73.0536C20.5888 71.217 20.636 70.9211 20.7163 70.4551ZM24.574 73.9382C24.5662 71.7488 24.5716 69.9264 24.5862 69.8884C24.6056 69.8375 24.8236 69.8193 25.4124 69.8193H26.2122L26.2983 70.0819C26.3457 70.2264 26.4207 70.4938 26.4651 70.6762C26.5095 70.8587 26.6245 71.2941 26.7207 71.6438C26.8169 71.9935 27.0157 72.7274 27.1626 73.2748L27.4297 74.27L27.4481 72.0584L27.4665 69.8469L28.0618 69.8312L28.6572 69.8155L28.643 73.8672L28.6288 77.9189L27.9969 77.9346C27.6495 77.9433 27.3439 77.9292 27.318 77.9034C27.2922 77.8775 27.1453 77.3853 26.9916 76.8095C26.8379 76.2338 26.637 75.489 26.5453 75.1545C26.3861 74.5748 26.325 74.3472 25.9509 72.943L25.7889 72.3349L25.7698 75.1269L25.7507 77.9189H25.1695H24.5884L24.574 73.9382ZM29.5697 77.9189L29.5555 73.8648L29.5413 69.8106L30.8839 69.8309C32.0996 69.8492 32.25 69.862 32.4759 69.9657C32.9499 70.1834 33.2012 70.4673 33.3985 71.008C33.4907 71.2606 33.4994 71.5056 33.4994 73.8553C33.4994 76.4032 33.4983 76.4295 33.3706 76.7987C33.2053 77.2767 32.8964 77.6054 32.4433 77.7854C32.1333 77.9086 32.0477 77.9156 30.8427 77.9172L29.5697 77.9189ZM40.1135 71.0321V70.4257V69.8193H42.0774H44.0412L44.0724 69.9437C44.0895 70.0121 44.0962 70.2795 44.0873 70.538L44.0709 71.008L43.421 71.0236L42.7711 71.0391L42.7569 74.479L42.7426 77.9189L42.0927 77.9345L41.4427 77.9501L41.4285 74.5067L41.4142 71.0632L40.7639 71.0477L40.1135 71.0321ZM44.6303 77.8591C44.5843 77.7393 44.5876 69.9022 44.6337 69.8562C44.6539 69.8359 45.2025 69.8193 45.8527 69.8193C46.8908 69.8193 47.073 69.8327 47.348 69.9292C47.8661 70.1111 48.0551 70.2691 48.2564 70.6884C48.4273 71.0446 48.4375 71.1017 48.4603 71.8379C48.4946 72.9483 48.3087 73.576 47.8654 73.8453L47.707 73.9415L47.9301 74.1286C48.0604 74.2379 48.212 74.4441 48.2948 74.6245C48.4302 74.9193 48.4384 74.9952 48.4766 76.288C48.4986 77.033 48.5342 77.711 48.5556 77.7945L48.5947 77.9466H47.9585C47.4347 77.9466 47.309 77.9304 47.2464 77.8553C47.1886 77.7858 47.1638 77.4514 47.1428 76.4592C47.1182 75.3016 47.1031 75.1348 47.0091 74.9796C46.8689 74.7482 46.7122 74.6846 46.2823 74.6846H45.9251V76.3156V77.9466H45.2945C44.7706 77.9466 44.6582 77.9318 44.6303 77.8591ZM49.2737 76.7579L49.2582 73.2868L49.2428 69.8157L49.8947 69.8313L50.5467 69.8469L50.5743 73.1696C50.5991 76.1354 50.5894 76.5564 50.7813 76.6918C50.8257 76.7232 50.881 76.7393 50.95 76.7681C51.1957 76.8706 51.5347 76.7811 51.6676 76.5786C51.7561 76.4437 51.7667 76.1512 51.792 73.139L51.8197 69.8469H52.4285H53.0373L53.0516 73.0525C53.0601 74.9501 53.044 76.3762 53.0123 76.5476C52.9008 77.1502 52.5925 77.5937 52.1088 77.8472C51.9162 77.9482 51.7611 77.9736 51.2283 77.9915C50.6214 78.012 50.5618 78.0043 50.2597 77.8663C49.8496 77.6789 49.6661 77.5032 49.4483 77.0896L49.2737 76.7579ZM58.0026 70.4869C57.9938 70.2003 57.9994 69.9325 58.015 69.8918C58.0382 69.8316 58.4111 69.8205 60.0235 69.8324L62.0037 69.8469V70.4274V71.008L61.3538 71.0236L60.7039 71.0391L60.6897 74.479L60.6754 77.9189L60.0433 77.9346C59.5749 77.9463 59.3996 77.932 59.3662 77.8794C59.3413 77.8403 59.3207 76.2853 59.3202 74.4238L59.3194 71.0391L58.669 71.0236L58.0187 71.008L58.0026 70.4869ZM62.4864 73.2776C62.4778 71.4546 62.4833 69.9307 62.4984 69.8912C62.5189 69.8379 62.6916 69.8193 63.1643 69.8193H63.8026V73.0591C63.8026 76.0289 63.7927 76.509 64.0146 76.67C64.0671 76.7082 64.1326 76.7284 64.2142 76.7596C64.4256 76.8402 64.4702 76.8409 64.6477 76.7668C64.7289 76.7329 64.7936 76.7122 64.8453 76.6739C65.0595 76.515 65.0495 76.0537 65.0638 73.0958L65.0797 69.8157L65.7003 69.8313L66.3209 69.8469L66.336 72.8877C66.3512 75.9384 66.3296 76.4134 66.1515 76.9574C66.0408 77.2956 65.7372 77.6402 65.3876 77.8244C65.1206 77.9651 65.0592 77.9742 64.3837 77.9742C63.6722 77.9742 63.6607 77.9722 63.3521 77.794C62.985 77.582 62.7849 77.3391 62.621 76.9066C62.5046 76.5992 62.5015 76.517 62.4864 73.2776ZM67.1788 77.9501V73.8803V69.8105L68.4933 69.8302C69.7729 69.8494 69.8159 69.8537 70.1122 69.9933C70.4784 70.1658 70.6726 70.3624 70.8418 70.7315C70.9526 70.9734 70.971 71.1149 70.9884 71.8623C71.0142 72.9763 70.9355 73.3059 70.5475 73.7079C70.2885 73.9764 70.2838 73.987 70.3923 74.0629C70.5925 74.2029 70.7326 74.3758 70.8514 74.6293C70.9563 74.853 70.9713 75.0119 71.0007 76.205C71.021 77.0291 71.0583 77.5913 71.0991 77.6886C71.1351 77.7748 71.1506 77.8681 71.1333 77.8959C71.1161 77.9238 70.8164 77.9466 70.4674 77.9466H69.8327L69.7701 77.7945C69.7337 77.7063 69.6932 77.109 69.6734 76.3709C69.6506 75.5227 69.6165 75.0588 69.5709 74.9777C69.4458 74.7552 69.28 74.6846 68.8831 74.6846H68.5088L68.4941 76.3018L68.4795 77.9189L67.8291 77.9345L67.1788 77.9501ZM72.543 71.3286C72.7014 70.3225 72.7503 70.048 72.7995 69.8884C72.8155 69.8366 73.0571 69.8193 73.761 69.8193H74.7011L74.7305 69.999C74.7908 70.3683 75.0929 72.2675 75.2867 73.4959C75.397 74.1953 75.5104 74.8919 75.5386 75.044C75.5669 75.196 75.6403 75.6563 75.7017 76.0668C75.7631 76.4773 75.854 77.0291 75.9037 77.2931C75.9533 77.5571 75.9789 77.8121 75.9606 77.8598C75.9331 77.9314 75.8202 77.9466 75.3154 77.9466C74.9447 77.9466 74.7784 77.9524 74.6935 77.8721C74.6184 77.8011 74.6069 77.6628 74.5738 77.3937C74.5532 77.2265 74.509 76.9465 74.4757 76.7717L74.415 76.4538H73.7059C73.316 76.4538 72.9826 76.4769 72.9652 76.5051C72.9477 76.5333 72.8942 76.8132 72.8461 77.1271C72.7732 77.604 72.7542 77.8043 72.6454 77.888C72.5554 77.9573 72.4038 77.9466 72.1092 77.9466C71.806 77.9466 71.5465 77.9279 71.5328 77.9051C71.5077 77.8637 71.6114 77.1505 71.9364 75.1269L72.2427 73.2195C72.316 72.7634 72.4511 71.9124 72.543 71.3286ZM76.5788 77.8783C76.5256 77.7945 76.5165 69.9092 76.5695 69.8562C76.5898 69.8359 76.8887 69.8193 77.2337 69.8193H77.861V73.2459V76.6725L78.8988 76.6876L79.9365 76.7026V77.3108V77.9189L78.2799 77.9336C76.9914 77.945 76.6133 77.9327 76.5788 77.8783ZM82.3719 77.9189L82.3577 73.8691L82.3435 69.8193H84.0873H85.8311V70.4274V71.0356H84.7518H83.6725V72.1137V73.1918H84.496C85.1341 73.1918 85.3339 73.2092 85.3837 73.2692C85.4252 73.3191 85.4423 73.5299 85.432 73.8635L85.416 74.3805L84.5443 74.3957L83.6725 74.411V75.5418V76.6726L84.738 76.6876L85.8034 76.7026L85.8191 77.3254L85.8348 77.9482L84.1033 77.9335L82.3719 77.9189ZM86.6337 77.9189L86.6195 73.8691L86.6053 69.8193H87.4291H88.253L88.3088 70.0266C88.3394 70.1407 88.4444 70.5325 88.542 70.8974C88.6396 71.2623 88.7767 71.7723 88.8467 72.0308L89.2057 73.3575C89.3333 73.8288 89.4481 74.2248 89.4609 74.2375C89.4736 74.2503 89.4841 73.2614 89.4841 72.04V69.8193H90.0653H90.6464V73.8847V77.9501L90.002 77.9345C89.4974 77.9223 89.3478 77.9009 89.3129 77.836C89.2883 77.7904 89.2048 77.5167 89.1273 77.2279C89.0497 76.939 88.773 75.9065 88.5124 74.9334C88.2517 73.9603 87.9927 73.0149 87.9368 72.8325L87.8353 72.5007L87.8286 75.1545C87.825 76.6142 87.8016 77.8404 87.7767 77.8796C87.7436 77.9317 87.5844 77.9465 87.1826 77.9349L86.6337 77.9189ZM96.1259 77.9501V73.8829V69.8158L96.7762 69.8313L97.4266 69.8469V73.8829V77.9189L96.7762 77.9345L96.1259 77.9501ZM98.3181 77.8591C98.272 77.7393 98.2753 69.9022 98.3214 69.8562C98.3416 69.8359 98.7158 69.8193 99.1529 69.8193C99.6003 69.8193 99.8013 69.794 99.9196 69.881C100.046 69.974 100.078 70.1954 100.216 70.713C100.307 71.0577 100.468 71.6507 100.572 72.0308C100.676 72.4109 100.858 73.0823 100.976 73.5228L101.19 74.3237L101.205 72.0715L101.219 69.8193H101.8H102.38V73.8829V77.9466H101.718H101.055L100.974 77.6563C100.929 77.4967 100.816 77.08 100.722 76.7303C100.454 75.7297 100.28 75.0884 100.113 74.4911C100.028 74.187 99.8746 73.6148 99.7719 73.2195L99.5851 72.5007L99.5561 75.2098C99.5402 76.6998 99.5215 77.9252 99.5146 77.9328C99.5078 77.9403 99.2432 77.9466 98.9269 77.9466C98.4534 77.9466 98.3457 77.9311 98.3181 77.8591ZM103.321 77.9481V73.8837V69.8193H105.065H106.808V70.4274V71.0356H105.729H104.649V72.1123V73.189L105.494 73.2042L106.338 73.2195L106.353 73.8138L106.369 74.4082H105.509H104.649V75.5404V76.6726L105.715 76.6876L106.78 76.7026V77.3108V77.9189L105.051 77.9335L103.321 77.9481ZM107.611 77.9189L107.596 73.8691L107.582 69.8193H109.326H111.07V70.4274V71.0356H109.991H108.911V72.1123V73.189L109.755 73.2042L110.599 73.2195L110.615 73.8124L110.631 74.4053L109.785 74.4206L108.939 74.4358L108.924 75.5542L108.909 76.6726L109.976 76.6876L111.042 76.7026L111.058 77.3254L111.074 77.9482L109.342 77.9335L107.611 77.9189ZM111.858 73.9382C111.85 71.7488 111.856 69.9264 111.87 69.8884C111.911 69.7819 114.168 69.792 114.533 69.9003C115.031 70.0481 115.298 70.2636 115.506 70.6839L115.691 71.0608V72.0019C115.691 72.9272 115.689 72.949 115.528 73.2962C115.42 73.531 115.297 73.6987 115.161 73.7966L114.958 73.944L115.18 74.13C115.306 74.2363 115.463 74.4484 115.546 74.6247C115.685 74.9222 115.691 74.9826 115.726 76.288C115.746 77.033 115.781 77.711 115.803 77.7945L115.843 77.9466H115.207C114.683 77.9466 114.557 77.9304 114.494 77.8553C114.437 77.7859 114.412 77.451 114.39 76.4592C114.361 75.0789 114.348 75.0106 114.079 74.7995C113.964 74.7085 113.854 74.6846 113.554 74.6846H113.175L113.16 76.3018L113.145 77.9189H112.509H111.872L111.858 73.9382ZM116.528 77.8591C116.482 77.7393 116.485 69.9022 116.531 69.8562C116.551 69.8359 116.85 69.8193 117.195 69.8193H117.822V73.8829V77.9466H117.192C116.668 77.9466 116.555 77.9318 116.528 77.8591ZM118.791 77.9189L118.777 73.8691L118.763 69.8193H119.562C120.083 69.8193 120.375 69.8404 120.399 69.8799C120.42 69.9133 120.544 70.3425 120.674 70.8336C120.805 71.3248 121.003 72.0626 121.115 72.4731C121.227 72.8836 121.369 73.4185 121.431 73.6618C121.493 73.905 121.565 74.1414 121.591 74.187C121.618 74.234 121.639 73.3045 121.64 72.0427L121.641 69.8155L122.236 69.8312L122.831 69.8469L122.847 73.7724C122.855 75.9313 122.848 77.7537 122.832 77.8222C122.803 77.9426 122.78 77.9466 122.141 77.9466H121.48L121.372 77.5734C121.313 77.3681 121.173 76.8519 121.061 76.4262C120.95 76.0005 120.824 75.5402 120.783 75.4034C120.742 75.2665 120.604 74.7565 120.476 74.27C120.349 73.7834 120.186 73.1863 120.116 72.943L119.987 72.5007L119.983 75.1545C119.981 76.6142 119.959 77.8404 119.934 77.8796C119.901 77.9317 119.742 77.9465 119.34 77.9349L118.791 77.9189ZM32.1434 73.8829C32.1434 71.2592 32.1373 71.2042 31.8327 71.0885C31.7561 71.0594 31.5082 71.0356 31.2819 71.0356H30.8704V73.8553V76.675H31.3363C31.5926 76.675 31.8426 76.6595 31.8918 76.6406C32.1316 76.5487 32.1434 76.4196 32.1434 73.8829ZM47.1422 72.2243C47.1422 71.5965 47.0827 71.3197 46.9154 71.1685C46.8273 71.0888 46.6943 71.0588 46.3622 71.0437L45.9251 71.0239V72.2243V73.4247L46.3622 73.4049C47.0377 73.3742 47.1422 73.2161 47.1422 72.2243ZM69.6691 72.2399C69.6688 71.4718 69.6093 71.2304 69.3929 71.1187C69.298 71.0696 69.0838 71.0356 68.8697 71.0356H68.5071V72.2243V73.413H68.8822C69.5369 73.413 69.6696 73.2152 69.6691 72.2399ZM114.389 72.1967C114.39 71.597 114.329 71.3184 114.164 71.1691C114.08 71.0927 113.943 71.0597 113.653 71.0452C113.435 71.0343 113.237 71.0443 113.215 71.0673C113.192 71.0905 113.173 71.6303 113.173 72.267V73.4247L113.615 73.4046C114.284 73.3743 114.387 73.2132 114.389 72.1967ZM22.0663 73.9121L21.8187 72.2243C21.774 71.9202 21.7314 71.6358 21.7239 71.5923C21.7164 71.5489 21.6678 71.7976 21.616 72.1452C21.5642 72.4928 21.4427 73.2996 21.3461 73.9382C21.2496 74.5768 21.1675 75.149 21.1637 75.2098C21.1572 75.3135 21.1914 75.3204 21.7103 75.3204H22.2638L22.2484 75.1837C22.24 75.1085 22.158 74.5363 22.0663 73.9121ZM74.0444 73.9382C73.9484 73.2996 73.8333 72.5299 73.7886 72.2277C73.7439 71.9254 73.6973 71.6681 73.6851 71.6559C73.6729 71.6437 73.6464 71.7541 73.6265 71.9013C73.6065 72.0485 73.5551 72.3806 73.5123 72.6392C73.4193 73.2007 73.149 75.053 73.1371 75.2098C73.1292 75.3136 73.1628 75.3204 73.6822 75.3204C74.2016 75.3204 74.2352 75.3136 74.2273 75.2098C74.2227 75.149 74.1404 74.5768 74.0444 73.9382Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90.3164 31.5185C90.3867 31.5412 90.4679 31.5651 90.5502 31.5867C90.756 31.6408 90.938 31.7071 90.9547 31.7341C90.9714 31.761 91.0365 31.783 91.0994 31.783C91.2024 31.783 92.8949 32.3239 93.1647 32.4431C93.2256 32.47 93.4622 32.5544 93.6905 32.6306C94.1493 32.7838 94.7899 33.0226 95.0466 33.1362C95.1379 33.1766 95.3944 33.2787 95.6167 33.3632C95.839 33.4476 96.0335 33.5371 96.0489 33.5621C96.0644 33.5871 96.1145 33.6075 96.1603 33.6075C96.2061 33.6075 96.3976 33.6796 96.586 33.7677C96.7743 33.8558 97.1277 34.0187 97.3712 34.1296C98.0545 34.4409 99.4663 35.144 99.9077 35.3929C101.85 36.4878 103.012 37.2779 104.316 38.3899C105.088 39.0482 106.358 40.4226 106.584 40.8448C106.627 40.9256 106.615 40.9649 106.568 40.9629C105.634 40.0544 104.381 39.1064 102.812 38.4069C101.944 37.9346 100.613 37.2625 99.8342 36.9126C99.287 36.6668 98.4812 36.3297 98.3398 36.2875C98.2637 36.2647 98.0722 36.1873 97.9144 36.1155C97.7565 36.0437 97.6114 35.9849 97.592 35.9849C97.5725 35.9849 97.3032 35.8893 96.9935 35.7725C96.6837 35.6557 96.3307 35.5292 96.2089 35.4914C96.0871 35.4537 95.8819 35.3751 95.7529 35.3168C95.6238 35.2585 95.4979 35.2109 95.4731 35.2109C95.4483 35.2109 95.1554 35.1243 94.8222 35.0183C93.4605 34.5856 92.7828 34.3865 91.7038 34.1021C91.357 34.0107 91.0537 33.924 91.0301 33.9093C91.0064 33.8947 90.8543 33.858 90.6922 33.8279C90.53 33.7976 90.1732 33.712 89.8992 33.6376C89.2911 33.4724 88.0977 33.1976 87.3602 33.053C87.0596 32.994 86.661 32.9098 86.4746 32.8657C86.2881 32.8217 85.8242 32.733 85.4437 32.6686C85.0631 32.6043 84.6522 32.5265 84.5304 32.4957C84.4087 32.4649 84.2343 32.4299 84.143 32.4179C83.7118 32.3612 83.0969 32.2621 82.5932 32.1678C82.2888 32.1109 81.8192 32.0374 81.5497 32.0044C81.2801 31.9714 80.8566 31.9113 80.6087 31.8709C80.3608 31.8306 80.061 31.7933 79.9425 31.788C79.824 31.7828 79.6824 31.7547 79.6279 31.7255C79.5733 31.6963 79.4365 31.6725 79.3238 31.6725C79.2111 31.6725 78.9043 31.6474 78.6421 31.6168C78.3799 31.5862 77.6272 31.4979 76.9694 31.4205C76.3117 31.3432 75.5853 31.2697 75.3554 31.2571C75.1254 31.2446 74.5428 31.1959 74.0607 31.149C73.5785 31.1021 72.9848 31.0519 72.7413 31.0375C72.4977 31.0231 72.1615 30.9994 71.9941 30.985C71.4996 30.9425 69.2298 30.8298 68.4661 30.8099C67.5477 30.7858 59.1718 30.7858 58.2534 30.8099C57.4907 30.8298 55.2211 30.9424 54.7254 30.985C54.558 30.9993 54.2591 31.0214 54.0613 31.034C53.6354 31.061 53.201 31.0979 52.3731 31.177C52.0383 31.209 51.5802 31.2453 51.3552 31.2575C51.1301 31.2699 50.4078 31.3432 49.7501 31.4205C49.0923 31.4979 48.3396 31.5862 48.0774 31.6168C47.8152 31.6474 47.5026 31.6725 47.3828 31.6725C47.2629 31.6725 47.1412 31.6949 47.1123 31.7222C47.0834 31.7496 46.8854 31.7873 46.6723 31.806C46.277 31.8407 45.7167 31.9216 44.486 32.1218C44.1055 32.1837 43.4953 32.2813 43.13 32.3386C42.7647 32.396 42.2043 32.4933 41.8847 32.5549C41.565 32.6165 41.2163 32.6788 41.1098 32.6932C40.842 32.7296 40.4422 32.8112 39.9198 32.9362C39.6763 32.9945 39.3525 33.0585 39.2003 33.0786C39.0481 33.0987 38.8115 33.1496 38.6745 33.1917C38.3442 33.2931 38.0534 33.3644 37.6505 33.4426C37.4679 33.4781 37.0943 33.5647 36.8203 33.6351C36.5463 33.7055 36.1727 33.8001 35.9901 33.8454C35.4261 33.9853 34.3951 34.2615 34.1913 34.3273C34.0847 34.3617 33.7858 34.4471 33.5271 34.517C33.2683 34.587 32.9446 34.6826 32.8076 34.7294C32.6706 34.7762 32.4589 34.8436 32.3371 34.8791C32.2153 34.9145 31.9912 34.9901 31.839 35.0469C31.6868 35.1036 31.4128 35.1928 31.2301 35.2448C31.0475 35.297 30.8732 35.3559 30.8427 35.3759C30.8123 35.3958 30.6753 35.4443 30.5383 35.4837C30.4013 35.523 30.2394 35.5745 30.1785 35.5981C30.1176 35.6217 29.8188 35.7336 29.5144 35.8469C29.2099 35.9602 28.8553 36.0998 28.7263 36.1571C28.5972 36.2144 28.4653 36.2614 28.4331 36.2614C28.4009 36.2614 28.1884 36.3484 27.9608 36.4549C27.7332 36.5613 27.5271 36.6484 27.5027 36.6484C27.4784 36.6484 27.3042 36.723 27.1156 36.8142C26.9271 36.9055 26.7597 36.9801 26.7436 36.9801C26.6783 36.9801 24.6328 38.0024 24.1375 38.2825C23.8449 38.448 23.5958 38.5834 23.5838 38.5834C23.5628 38.5834 23.4259 38.6678 22.8055 39.0632L22.7898 39.0687C22.728 39.1094 22.6615 39.1536 22.5911 39.2009C22.0369 39.56 21.5882 39.8761 21.3663 40.0598C21.2575 40.1396 21.1484 40.2205 21.0405 40.3018C20.9808 40.3044 20.9659 40.316 21.0006 40.3319C20.7402 40.5289 20.4878 40.7274 20.2627 40.9161C20.2578 40.9177 20.2528 40.9191 20.2477 40.9205C20.082 40.9638 20.1655 40.8134 20.5166 40.4365C21.1778 39.7264 21.5311 39.3954 22.4144 38.6576C22.9308 38.2264 24.3613 37.2055 24.9759 36.8295C25.731 36.3676 26.677 35.8109 26.7567 35.7815C26.8122 35.7609 26.8701 35.7299 26.8853 35.7125C26.9395 35.6505 29.11 34.5504 29.5144 34.38C29.5752 34.3543 29.8118 34.2482 30.0402 34.1441C30.691 33.8475 30.7975 33.8021 31.5622 33.4955C31.958 33.3367 32.3565 33.1745 32.4478 33.1348C32.5391 33.0951 32.7384 33.021 32.8906 32.9702C33.0428 32.9194 33.2421 32.8445 33.3334 32.8037C33.4247 32.7628 33.6987 32.6625 33.9422 32.5806C34.1857 32.4986 34.8164 32.2857 35.3438 32.1074C35.8711 31.929 36.3353 31.783 36.3753 31.783C36.4152 31.783 36.5192 31.7461 36.6064 31.7009L36.724 31.64L36.7612 31.6284C42.4218 30.002 48.3977 28.9038 54.507 28.3553L54.6005 28.3554C54.6844 28.3555 55.0769 28.3313 55.4726 28.3017C55.8684 28.272 56.6841 28.2177 57.2853 28.181L58.3784 28.1141V28.0822C59.5929 28.0198 60.8111 27.9789 62.0316 27.9598L62.0316 28.0235H63.4151H64.7986L64.7987 27.9536C66.0151 27.9673 67.2327 28.0025 68.4503 28.0595L68.4502 28.1171L69.1014 28.1546C69.4595 28.1752 70.1883 28.2155 70.7211 28.244C71.2538 28.2725 71.8456 28.3122 72.0362 28.332L72.3828 28.3682L72.3828 28.3197C73.6299 28.4264 74.8753 28.5563 76.1175 28.7094L76.1175 28.7146L76.4219 28.7494C76.4826 28.7564 76.597 28.7703 76.7438 28.7885C81.2571 29.3737 85.7253 30.2667 90.0769 31.4759L90.3164 31.5185Z"
                fill="#F36F2B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.77205 69.7635C1.40553 69.8411 1.14174 69.9875 0.8717 70.2634C0.590919 70.5502 0.457807 70.8685 0.375283 71.4502C0.304769 71.9474 0.303607 75.8124 0.373844 76.2974C0.488248 77.0877 0.812976 77.5999 1.35915 77.8517C1.57916 77.9532 1.72052 77.9717 2.28308 77.9728C2.90038 77.974 2.9674 77.9635 3.23285 77.8237C3.61204 77.6239 3.88967 77.3226 4.03667 76.9513C4.13807 76.6953 4.16082 76.505 4.18058 75.7469L4.20404 74.8467L3.57562 74.8623L2.94726 74.878L2.91831 75.652C2.90237 76.0778 2.86822 76.4705 2.84237 76.5249C2.73106 76.7592 2.27572 76.856 1.98669 76.7067C1.70596 76.5616 1.70192 76.5214 1.70215 73.8664C1.70231 71.5459 1.70868 71.3845 1.80625 71.2246C2.01973 70.8749 2.51333 70.8382 2.77789 71.1522C2.91183 71.3112 2.91958 71.355 2.91958 71.952V72.5836H3.55609H4.19259L4.19192 71.9616C4.1912 71.268 4.11145 70.8858 3.88784 70.5047C3.72927 70.2344 3.36707 69.9451 3.04788 69.8338C2.78475 69.742 2.0618 69.7021 1.77205 69.7635ZM37.3609 69.7669C36.7824 69.8809 36.2502 70.3301 36.1008 70.8303C35.8873 71.5452 35.9447 72.3918 36.2497 73.0259C36.3903 73.3181 36.5753 73.5371 37.2402 74.198C37.6899 74.6451 38.1205 75.1178 38.197 75.2485C38.4766 75.726 38.5051 76.3228 38.2619 76.6053C38.1723 76.7094 38.072 76.7511 37.8628 76.7712C37.6119 76.7952 37.5645 76.7812 37.3991 76.6336C37.2205 76.4741 37.2142 76.4539 37.1907 75.9638L37.1665 75.4585H36.5368H35.9071L35.9079 75.8594C35.9088 76.2895 36.0208 76.8558 36.1572 77.1191C36.3023 77.3995 36.5785 77.6718 36.8707 77.8225C37.1057 77.9438 37.2442 77.9717 37.7062 77.9906C38.3373 78.0165 38.5949 77.963 38.9636 77.7294C39.4945 77.3931 39.7471 76.8301 39.7471 75.9838C39.7471 75.0043 39.5132 74.565 38.4157 73.4828C37.4758 72.556 37.3185 72.2989 37.3185 71.6892C37.3185 71.2408 37.4416 71.0354 37.7585 70.9552C37.9281 70.9123 38.0035 70.9226 38.1668 71.0105C38.3938 71.1328 38.497 71.3814 38.5042 71.8234L38.5085 72.086H39.1136C39.6687 72.086 39.7215 72.0769 39.7536 71.9761C39.8195 71.7687 39.6637 70.9126 39.5012 70.5894C39.3923 70.3726 39.0461 70.0369 38.8012 69.9104C38.4674 69.7379 37.8299 69.6744 37.3609 69.7669ZM55.1682 69.7849C54.8125 69.8634 54.6645 69.9419 54.3748 70.2061C54.114 70.444 53.9751 70.7051 53.8682 71.1582C53.7439 71.6848 53.747 76.1548 53.8721 76.6368C54.027 77.2343 54.2816 77.5798 54.7482 77.8256C55.0103 77.9638 55.0778 77.9741 55.7217 77.9741C56.3657 77.9741 56.4331 77.9638 56.6953 77.8256C57.405 77.4516 57.6903 76.735 57.6488 75.4309L57.6312 74.878L57.0138 74.8624L56.3964 74.8468L56.3773 75.6549L56.3582 76.4629L56.1704 76.6305C56.0012 76.7814 55.955 76.7953 55.7032 76.7712C55.343 76.7366 55.1908 76.5726 55.1407 76.1653C55.121 76.0046 55.1128 74.8531 55.1227 73.6064L55.1236 73.4864C55.1385 71.5927 55.1411 71.264 55.3064 71.11C55.3411 71.0777 55.383 71.0531 55.4337 71.0233L55.449 71.0143C55.7847 70.8162 56.2252 70.9849 56.3268 71.3505C56.359 71.4661 56.3854 71.7917 56.3856 72.074L56.3859 72.5872L57.0086 72.5716L57.6312 72.5559L57.6279 71.9201C57.6224 70.901 57.4184 70.4018 56.8564 70.0326C56.4088 69.7387 55.7901 69.6479 55.1682 69.7849ZM92.8751 69.7669C92.3084 69.8786 91.8523 70.2559 91.6361 70.7918C91.5045 71.1179 91.5043 71.123 91.4889 73.7611C91.4742 76.2865 91.4785 76.4205 91.5867 76.7832C91.7636 77.3767 92.108 77.7325 92.6895 77.9225C93.0837 78.0513 93.9487 78.0136 94.308 77.852C94.6558 77.6956 94.9873 77.3411 95.141 76.9609C95.2633 76.6585 95.2679 76.5885 95.2679 75.0162L95.268 73.3852H94.3824H93.4968V73.9934V74.6016L93.7633 74.6185L94.0298 74.6356L94.0124 75.5709C93.9963 76.4352 93.9861 76.515 93.8786 76.6223C93.734 76.7666 93.36 76.8224 93.142 76.7322C92.8103 76.5949 92.805 76.5498 92.8052 73.8468C92.8054 71.5455 92.8118 71.3844 92.9093 71.2246C93.1228 70.8749 93.6164 70.8382 93.881 71.1522C94.0149 71.3112 94.0227 71.355 94.0227 71.952V72.5836H94.6654H95.3082L95.2861 71.8234C95.2665 71.151 95.2476 71.0277 95.122 70.7565C95.0439 70.5879 94.9039 70.3633 94.8109 70.2575C94.426 69.8196 93.6306 69.618 92.8751 69.7669ZM125.028 69.7641C124.471 69.8819 124.094 70.1747 123.819 70.7038L123.662 71.0078V73.8607V76.7136L123.855 77.0926C124.206 77.7785 124.721 78.0326 125.676 77.9907C126.112 77.9716 126.258 77.9414 126.484 77.8236C126.98 77.5663 127.292 77.1346 127.398 76.5576C127.43 76.3854 127.448 75.6284 127.44 74.8189L127.425 73.3852H126.54H125.654V73.9934V74.6016L125.917 74.6184L126.18 74.6353V75.4533C126.18 75.9094 126.153 76.3491 126.119 76.4471C125.967 76.8821 125.201 76.8971 125.024 76.4685C124.977 76.355 124.963 75.622 124.974 73.7889L124.99 71.2655L125.123 71.1237C125.288 70.9482 125.572 70.8888 125.798 70.9824C126.084 71.1007 126.149 71.2654 126.18 71.9449L126.208 72.5559L126.83 72.5716L127.453 72.5872V72.0509C127.453 71.3197 127.367 70.8791 127.157 70.5267C126.968 70.2103 126.59 69.9172 126.245 69.82C125.947 69.7358 125.302 69.7062 125.028 69.7641ZM4.96746 73.8811V77.9465H5.60292C6.21606 77.9465 6.23942 77.9421 6.26853 77.8221C6.28508 77.7536 6.29178 75.9312 6.28342 73.7722L6.26815 69.8468L5.6178 69.8312L4.96746 69.8157V73.8811ZM6.8493 69.8948C6.8493 69.9365 6.88805 70.1915 6.93542 70.4616C6.9828 70.7316 7.08392 71.3631 7.16013 71.8648C7.2364 72.3666 7.36016 73.1751 7.43516 73.6617C7.51021 74.1482 7.61925 74.8697 7.67742 75.265C7.73565 75.6603 7.8356 76.3072 7.89953 76.7025C7.96346 77.0978 8.03375 77.5332 8.05573 77.67L8.09569 77.9188H9.06052H10.0253L10.0971 77.5318C10.1366 77.319 10.233 76.7219 10.3112 76.2049C10.5596 74.5637 10.9371 72.114 11.1375 70.842C11.2142 70.3555 11.2769 69.9263 11.277 69.8883C11.2771 69.8372 11.1186 69.8192 10.6683 69.8192C10.3335 69.8192 10.0593 69.8378 10.0592 69.8606C10.059 69.8834 10.0335 70.0514 10.0025 70.2338C9.9716 70.4163 9.88476 70.9885 9.8096 71.5054C9.73443 72.0224 9.5974 72.9554 9.50502 73.5787C9.41264 74.2021 9.29647 75.0055 9.24676 75.364C9.19706 75.7226 9.13939 75.9963 9.11863 75.9722C9.09787 75.9482 9.05288 75.717 9.01856 75.4585C8.9843 75.2001 8.89464 74.5781 8.81931 74.0763C8.74393 73.5746 8.63013 72.8033 8.56631 72.3624C8.37851 71.0646 8.22963 70.0769 8.20162 69.9436C8.17633 69.8229 8.15546 69.8192 7.51242 69.8192C6.98806 69.8192 6.8493 69.835 6.8493 69.8948ZM11.8692 69.8544C11.8146 69.9089 11.8227 77.793 11.8775 77.8792C11.9109 77.9319 12.0862 77.9462 12.5546 77.9345L13.1867 77.9188V73.8828V69.8468L12.5472 69.8313C12.1955 69.8228 11.8904 69.8331 11.8692 69.8544ZM14.0831 69.8544C14.0359 69.9015 14.0311 77.7364 14.0782 77.859C14.1078 77.9361 14.3106 77.9465 15.788 77.9465C17.2655 77.9465 17.4683 77.9361 17.4979 77.859C17.5605 77.696 17.5345 76.8106 17.4651 76.7412C17.4184 76.6946 17.106 76.6749 16.4139 76.6749H15.4291L15.4149 73.2608L15.4006 69.8468L14.7612 69.8313C14.4094 69.8228 14.1043 69.8331 14.0831 69.8544ZM20.8255 69.8883C20.8126 69.9263 20.7634 70.1813 20.7163 70.455C20.636 70.9209 20.5888 71.2169 20.3015 73.0535C20.2396 73.4488 20.1399 74.0708 20.0798 74.4357C19.6214 77.2197 19.5274 77.8485 19.5611 77.905C19.5748 77.9278 19.8455 77.9465 20.1627 77.9465C20.7171 77.9465 20.7405 77.9416 20.7631 77.8221C20.776 77.7536 20.8325 77.424 20.8886 77.0895L20.9908 76.4814L21.7178 76.466C22.442 76.4507 22.4448 76.4511 22.4776 76.5816C22.5039 76.686 22.6789 77.8574 22.6789 77.9285C22.6789 77.9384 22.9778 77.9465 23.3431 77.9465C23.4106 77.9465 23.4718 77.9472 23.5273 77.9478C23.7724 77.9505 23.9041 77.952 23.9631 77.8873C24.0316 77.8121 24.0022 77.6476 23.9386 77.2921C23.9262 77.2229 23.9125 77.1464 23.898 77.0619C23.838 76.7122 23.7136 75.9534 23.6215 75.3756C23.4442 74.2621 23.2829 73.2553 23.0147 71.5884C22.9242 71.0258 22.8345 70.4412 22.8153 70.2891C22.8103 70.2498 22.8062 70.2137 22.8025 70.1807C22.787 70.0426 22.7774 69.9569 22.7307 69.9037C22.654 69.8165 22.4774 69.8171 22.0111 69.8187C21.943 69.8189 21.8688 69.8192 21.7878 69.8192C21.0861 69.8192 20.843 69.8366 20.8255 69.8883ZM24.5862 69.8883C24.5716 69.9263 24.5662 71.7487 24.574 73.9381L24.5884 77.9188H25.1695H25.7507L25.7698 75.1268L25.7889 72.3348L25.9509 72.9429C26.325 74.3471 26.3861 74.5747 26.5453 75.1544C26.637 75.4889 26.8379 76.2337 26.9916 76.8094C27.1453 77.3852 27.2922 77.8774 27.318 77.9032C27.344 77.9291 27.6495 77.9432 27.9969 77.9345L28.6288 77.9188L28.643 73.8671L28.6572 69.8154L28.0618 69.8311L27.4665 69.8468L27.4481 72.0583L27.4297 74.2698L27.1626 73.2747C27.0157 72.7273 26.8169 71.9934 26.7207 71.6437C26.6245 71.294 26.5095 70.8586 26.4651 70.6761C26.4207 70.4937 26.3457 70.2263 26.2983 70.0818L26.2122 69.8192H25.4124C24.8236 69.8192 24.6056 69.8374 24.5862 69.8883ZM29.5555 73.8647L29.5697 77.9188L30.8427 77.9171C32.0477 77.9155 32.1333 77.9084 32.4433 77.7853C32.8964 77.6052 33.2053 77.2766 33.3706 76.7986C33.4983 76.4294 33.4994 76.4031 33.4994 73.8552C33.4994 71.5054 33.4908 71.2605 33.3985 71.0078C33.2012 70.4672 32.9499 70.1833 32.4759 69.9656C32.25 69.8618 32.0996 69.8491 30.8839 69.8308L29.5413 69.8105L29.5555 73.8647ZM40.1135 70.4256V71.032L40.7639 71.0476L41.4142 71.0631L41.4285 74.5066L41.4427 77.95L42.0927 77.9344L42.7426 77.9188L42.7569 74.4789L42.7711 71.039L43.421 71.0234L44.0709 71.0078L44.0873 70.5379C44.0962 70.2794 44.0895 70.012 44.0724 69.9436L44.0412 69.8192H42.0774H40.1135V70.4256ZM44.6337 69.856C44.5876 69.9021 44.5843 77.7392 44.6303 77.859C44.6582 77.9317 44.7706 77.9465 45.2945 77.9465H45.9251V76.3155V74.6845H46.2823C46.7122 74.6845 46.8689 74.7481 47.0091 74.9795C47.1031 75.1347 47.1182 75.3014 47.1428 76.4591C47.1638 77.4513 47.1886 77.7857 47.2464 77.8551C47.309 77.9303 47.4347 77.9465 47.9585 77.9465H48.5947L48.5556 77.7944C48.5342 77.7108 48.4986 77.0328 48.4766 76.2878C48.4384 74.995 48.4302 74.9192 48.2948 74.6244C48.212 74.4439 48.0604 74.2378 47.9301 74.1285L47.707 73.9414L47.8654 73.8452C48.3087 73.5759 48.4946 72.9482 48.4603 71.8378C48.4375 71.1016 48.4273 71.0445 48.2564 70.6883C48.0551 70.269 47.8661 70.111 47.348 69.9291C47.073 69.8325 46.8908 69.8192 45.8527 69.8192C45.2025 69.8192 44.6539 69.8358 44.6337 69.856ZM49.2582 73.2867L49.2737 76.7578L49.4483 77.0895C49.6661 77.5031 49.8496 77.6788 50.2598 77.8662C50.5618 78.0042 50.6215 78.0119 51.2283 77.9914C51.7611 77.9735 51.9162 77.9481 52.1088 77.8471C52.5925 77.5936 52.9009 77.1501 53.0123 76.5475C53.044 76.3761 53.0601 74.95 53.0516 73.0524L53.0373 69.8468H52.4285H51.8197L51.792 73.1389C51.7667 76.1511 51.7561 76.4436 51.6676 76.5784C51.5347 76.781 51.1957 76.8705 50.95 76.768C50.931 76.76 50.913 76.7531 50.896 76.7465C50.8514 76.7291 50.8135 76.7145 50.7813 76.6917C50.6017 76.5649 50.5987 76.188 50.5787 73.7079C50.5774 73.5384 50.5759 73.3591 50.5744 73.1694L50.5467 69.8468L49.8947 69.8312L49.2428 69.8156L49.2582 73.2867ZM58.015 69.8917C57.9994 69.9324 57.9938 70.2001 58.0026 70.4868L58.0187 71.0078L58.669 71.0234L59.3194 71.039L59.3202 74.4236C59.3207 76.2852 59.3413 77.8402 59.3662 77.8792C59.3996 77.9319 59.5749 77.9462 60.0433 77.9345L60.6754 77.9188L60.6897 74.4789L60.7039 71.039L61.3538 71.0234L62.0037 71.0078V70.4273V69.8468L60.0236 69.8323C58.4112 69.8204 58.0382 69.8315 58.015 69.8917ZM62.4984 69.8911C62.4833 69.9306 62.4778 71.4545 62.4864 73.2775C62.5015 76.5168 62.5046 76.5991 62.621 76.9065C62.7849 77.339 62.985 77.5819 63.3521 77.7939C63.6607 77.9721 63.6722 77.9741 64.3837 77.9741C65.0592 77.9741 65.1206 77.9649 65.3876 77.8243C65.7372 77.6401 66.0408 77.2955 66.1515 76.9573C66.3296 76.4133 66.3512 75.9383 66.336 72.8876L66.3209 69.8468L65.7003 69.8312L65.0797 69.8156L65.0638 73.0957C65.0631 73.2552 65.0624 73.4075 65.0617 73.5528C65.0499 76.1024 65.048 76.5234 64.8453 76.6738C64.8052 76.7035 64.7572 76.7226 64.6998 76.7456C64.6832 76.7522 64.6659 76.7591 64.6477 76.7667C64.4702 76.8408 64.4256 76.8401 64.2142 76.7595C64.1997 76.7539 64.1857 76.7487 64.1721 76.7437C64.1097 76.7205 64.0577 76.7013 64.0146 76.6699C63.8021 76.5156 63.8021 76.0686 63.8025 73.4206C63.8025 73.3043 63.8026 73.1839 63.8026 73.059V69.8192H63.1643C62.6916 69.8192 62.5189 69.8378 62.4984 69.8911ZM67.1788 73.8802V77.95L67.8291 77.9344L68.4795 77.9188L68.4941 76.3017L68.5088 74.6845H68.8831C69.28 74.6845 69.4458 74.7551 69.5709 74.9776C69.6165 75.0587 69.6506 75.5226 69.6734 76.3708C69.6932 77.1089 69.7337 77.7062 69.7701 77.7944L69.8327 77.9465H70.4674C70.8164 77.9465 71.1161 77.9237 71.1333 77.8958C71.1506 77.868 71.1351 77.7747 71.0991 77.6885C71.0583 77.5912 71.021 77.029 71.0007 76.2049C70.9713 75.0118 70.9563 74.8529 70.8514 74.6292C70.7326 74.3757 70.5925 74.2028 70.3923 74.0628C70.2838 73.9869 70.2885 73.9763 70.5475 73.7078C70.9355 73.3058 71.0142 72.9761 70.9884 71.8622C70.971 71.1148 70.9526 70.9732 70.8418 70.7314C70.6726 70.3623 70.4784 70.1657 70.1122 69.9932C69.8159 69.8536 69.7729 69.8493 68.4933 69.8301L67.1788 69.8104V73.8802ZM72.7995 69.8883C72.7503 70.0479 72.7014 70.3224 72.543 71.3285C72.4511 71.9123 72.316 72.7632 72.2427 73.2194L71.9364 75.1268C71.6114 77.1503 71.5077 77.8635 71.5328 77.905C71.5465 77.9278 71.806 77.9465 72.1092 77.9465C72.1461 77.9465 72.1807 77.9467 72.2132 77.9468C72.4408 77.9479 72.5666 77.9485 72.6454 77.8879C72.743 77.8129 72.7683 77.644 72.8251 77.2662C72.8316 77.2227 72.8386 77.1763 72.8461 77.127C72.8942 76.8131 72.9477 76.5332 72.9652 76.505C72.9826 76.4768 73.316 76.4537 73.7059 76.4537H74.415L74.4757 76.7716C74.509 76.9464 74.5532 77.2264 74.5738 77.3936C74.5762 77.4134 74.5786 77.4325 74.5808 77.451C74.6089 77.6827 74.6239 77.8062 74.6935 77.872C74.7729 77.947 74.9234 77.9469 75.2455 77.9465C75.2679 77.9465 75.2912 77.9465 75.3154 77.9465C75.8202 77.9465 75.9331 77.9313 75.9606 77.8597C75.9789 77.812 75.9533 77.557 75.9037 77.293C75.854 77.029 75.7631 76.4772 75.7017 76.0667C75.6403 75.6562 75.5669 75.1959 75.5386 75.0439C75.5104 74.8918 75.397 74.1952 75.2867 73.4958C75.0929 72.2674 74.7908 70.3682 74.7305 69.9989L74.7011 69.8192H73.761C73.0571 69.8192 72.8155 69.8365 72.7995 69.8883ZM76.5695 69.856C76.5165 69.9091 76.5256 77.7944 76.5788 77.8782C76.6133 77.9326 76.9914 77.9449 78.2799 77.9335L79.9365 77.9188V77.3107V76.7025L78.8988 76.6875L77.861 76.6724V73.2458V69.8192H77.2337C76.8887 69.8192 76.5898 69.8358 76.5695 69.856ZM82.3577 73.869L82.3719 77.9188L84.1033 77.9334L85.8348 77.9481L85.8191 77.3253L85.8034 76.7025L84.738 76.6875L83.6725 76.6725V75.5417V74.4109L84.5443 74.3956L85.416 74.3804L85.432 73.8634C85.4423 73.5297 85.4252 73.319 85.3837 73.2691C85.3339 73.2091 85.1341 73.1917 84.496 73.1917H83.6725V72.1136V71.0355H84.7518H85.8311V70.4273V69.8192H84.0873H82.3435L82.3577 73.869ZM86.6195 73.869L86.6337 77.9188L87.1826 77.9348C87.5844 77.9464 87.7436 77.9316 87.7767 77.8795C87.8016 77.8403 87.825 76.614 87.8286 75.1544L87.8353 72.5006L87.9368 72.8324C87.9927 73.0148 88.2517 73.9602 88.5124 74.9333C88.773 75.9064 89.0497 76.9389 89.1273 77.2277C89.2048 77.5166 89.2883 77.7903 89.3129 77.8359C89.3478 77.9008 89.4974 77.9222 90.002 77.9344L90.6464 77.95V73.8846V69.8192H90.0653H89.4841V72.0399C89.4841 73.2613 89.4736 74.2502 89.4609 74.2374C89.4481 74.2247 89.3333 73.8286 89.2057 73.3574L88.8467 72.0307C88.7767 71.7722 88.6396 71.2622 88.542 70.8973C88.4444 70.5324 88.3394 70.1406 88.3088 70.0265L88.253 69.8192H87.4291H86.6053L86.6195 73.869ZM96.1259 73.8828V77.95L96.7762 77.9344L97.4266 77.9188V73.8828V69.8468L96.7762 69.8312L96.1259 69.8157V73.8828ZM98.3214 69.856C98.2753 69.9021 98.272 77.7392 98.3181 77.859C98.3457 77.931 98.4534 77.9465 98.9269 77.9465C99.2432 77.9465 99.5078 77.9402 99.5146 77.9327C99.5215 77.9251 99.5402 76.6997 99.5561 75.2097L99.5851 72.5006L99.7719 73.2194C99.8746 73.6147 100.028 74.1869 100.113 74.491C100.28 75.0883 100.454 75.7296 100.722 76.7301C100.816 77.0798 100.929 77.4966 100.974 77.6562L101.055 77.9465H101.718H102.38V73.8828V69.8192H101.8H101.219L101.205 72.0714L101.19 74.3236L100.976 73.5227C100.858 73.0822 100.676 72.4108 100.572 72.0307C100.468 71.6506 100.307 71.0576 100.216 70.7129C100.19 70.6141 100.167 70.526 100.147 70.4477C100.063 70.1154 100.022 69.9562 99.9196 69.8809C99.8254 69.8116 99.6788 69.8135 99.3973 69.8172C99.3252 69.8181 99.2442 69.8192 99.1529 69.8192C98.7158 69.8192 98.3416 69.8358 98.3214 69.856ZM103.321 73.8836V77.948L105.051 77.9334L106.78 77.9188V77.3107V76.7025L105.715 76.6875L104.649 76.6725V75.5402V74.4081H105.509H106.369L106.353 73.8137L106.338 73.2194L105.494 73.2041L104.649 73.1889V72.1122V71.0355H105.729H106.808V70.4273V69.8192H105.065H103.321V73.8836ZM107.596 73.869L107.611 77.9188L109.342 77.9334L111.074 77.9481L111.058 77.3253L111.042 76.7025L109.976 76.6875L108.909 76.6725L108.924 75.5541L108.939 74.4357L109.785 74.4204L110.631 74.4052L110.615 73.8123L110.599 73.2194L109.755 73.2041L108.911 73.1889V72.1122V71.0355H109.991H111.07V70.4273V69.8192H109.326H107.582L107.596 73.869ZM111.87 69.8883C111.856 69.9263 111.85 71.7487 111.858 73.9381L111.872 77.9188H112.509H113.145L113.16 76.3017L113.175 74.6845H113.554C113.854 74.6845 113.964 74.7084 114.079 74.7994C114.348 75.0105 114.361 75.0788 114.39 76.4591C114.412 77.4509 114.437 77.7858 114.494 77.8551C114.557 77.9303 114.683 77.9465 115.207 77.9465H115.843L115.803 77.7944C115.781 77.7108 115.746 77.0328 115.726 76.2878C115.691 74.9825 115.685 74.9221 115.546 74.6246C115.463 74.4483 115.306 74.2362 115.18 74.1299L114.958 73.9439L115.161 73.7965C115.297 73.6985 115.42 73.5309 115.528 73.296C115.689 72.9488 115.691 72.9271 115.691 72.0018V71.0607L115.506 70.6838C115.298 70.2635 115.031 70.0479 114.533 69.9002C114.168 69.7919 111.911 69.7818 111.87 69.8883ZM116.531 69.856C116.485 69.9021 116.482 77.7392 116.528 77.859C116.555 77.9317 116.668 77.9465 117.192 77.9465H117.822V73.8828V69.8192H117.195C116.85 69.8192 116.551 69.8358 116.531 69.856ZM118.777 73.869L118.791 77.9188L119.34 77.9348C119.742 77.9464 119.901 77.9316 119.934 77.8795C119.959 77.8403 119.981 76.614 119.983 75.1544L119.987 72.5006L120.116 72.9429C120.186 73.1862 120.349 73.7833 120.476 74.2698C120.604 74.7564 120.742 75.2664 120.783 75.4032C120.824 75.5401 120.95 76.0003 121.061 76.4261C121.173 76.8518 121.313 77.368 121.372 77.5733L121.48 77.9465H122.141C122.78 77.9465 122.803 77.9424 122.832 77.8221C122.848 77.7536 122.855 75.9312 122.847 73.7722L122.831 69.8468L122.236 69.8311L121.641 69.8154L121.64 72.0426C121.639 73.3044 121.618 74.2339 121.591 74.1869C121.565 74.1413 121.493 73.9049 121.431 73.6617C121.369 73.4184 121.227 72.8835 121.115 72.473C121.003 72.0625 120.805 71.3247 120.674 70.8335C120.544 70.3424 120.42 69.9132 120.399 69.8798C120.375 69.8403 120.083 69.8192 119.562 69.8192H118.763L118.777 73.869ZM31.8327 71.0884C32.1373 71.2041 32.1434 71.2591 32.1434 73.8828C32.1434 76.4195 32.1316 76.5486 31.8919 76.6405C31.8426 76.6594 31.5926 76.6749 31.3363 76.6749H30.8704V73.8552V71.0355H31.2819C31.5082 71.0355 31.7561 71.0593 31.8327 71.0884ZM46.9154 71.1684C47.0827 71.3196 47.1422 71.5964 47.1422 72.2242C47.1422 73.216 47.0377 73.3741 46.3622 73.4048L45.9251 73.4246V72.2242V71.0238L46.3622 71.0436C46.6943 71.0587 46.8273 71.0887 46.9154 71.1684ZM69.3929 71.1185C69.6093 71.2303 69.6688 71.4717 69.6691 72.2398C69.6696 73.2151 69.5369 73.4129 68.8822 73.4129H68.5071V72.2242V71.0355H68.8697C69.0838 71.0355 69.298 71.0695 69.3929 71.1185ZM114.164 71.169C114.329 71.3183 114.39 71.5969 114.389 72.1965C114.387 73.2131 114.284 73.3742 113.615 73.4045L113.173 73.4246V72.2669C113.173 71.6302 113.192 71.0903 113.215 71.0672C113.237 71.0442 113.435 71.0342 113.653 71.0451C113.943 71.0596 114.08 71.0926 114.164 71.169ZM21.8187 72.2242L22.0663 73.912C22.158 74.5362 22.24 75.1084 22.2484 75.1836L22.2638 75.3203H21.7103C21.1914 75.3203 21.1572 75.3134 21.1637 75.2097C21.1675 75.1489 21.2496 74.5767 21.3461 73.9381C21.4427 73.2995 21.5642 72.4927 21.616 72.1451C21.6678 71.7975 21.7164 71.5487 21.7239 71.5922C21.7314 71.6357 21.774 71.9201 21.8187 72.2242ZM73.7886 72.2276C73.8333 72.5298 73.9484 73.2995 74.0444 73.9381C74.1404 74.5767 74.2227 75.1489 74.2273 75.2097C74.2352 75.3135 74.2016 75.3203 73.6822 75.3203C73.1628 75.3203 73.1292 75.3135 73.1371 75.2097C73.149 75.0529 73.4193 73.2006 73.5123 72.6391C73.5551 72.3805 73.6065 72.0484 73.6265 71.9012C73.6464 71.754 73.6729 71.6436 73.6851 71.6558C73.6973 71.668 73.7439 71.9253 73.7886 72.2276Z"
                fill="#F36F2B"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer flex-row gap-4">
            <svg
              width="124"
              height="20"
              viewBox="0 0 124 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M63.541 6.55314V4.82991C63.541 4.57122 63.5529 4.37085 63.5771 4.2293C63.6012 4.08754 63.656 3.94812 63.7411 3.81049C63.8261 3.67294 63.9637 3.57798 64.1537 3.52536C64.3439 3.47265 64.5968 3.44638 64.9124 3.44638H66.6356V0H63.8808C62.2868 0 61.142 0.378176 60.4462 1.13453C59.7504 1.89105 59.4026 3.00538 59.4026 4.47796V6.5531H57.3393V9.99974H59.4025V19.9995H63.541V9.99978H66.2956L66.6597 6.55314H63.541Z"
                  fill="white"
                />
              </g>
              <g opacity="0.5">
                <path
                  d="M124.003 19.995V12.6702C124.003 9.07026 123.228 6.32031 119.028 6.32031C117.003 6.32031 115.653 7.42029 115.103 8.47027H115.053V6.64531H111.078V19.995H115.228V13.3702C115.228 11.6202 115.553 9.94524 117.703 9.94524C119.828 9.94524 119.853 11.9202 119.853 13.4702V19.97H124.003V19.995Z"
                  fill="white"
                />
                <path
                  d="M104.324 6.64844H108.474V19.9982H104.324V6.64844Z"
                  fill="white"
                />
                <path
                  d="M106.4 0C105.075 0 104 1.07498 104 2.39995C104 3.72493 105.075 4.82491 106.4 4.82491C107.725 4.82491 108.8 3.72493 108.8 2.39995C108.8 1.07498 107.725 0 106.4 0Z"
                  fill="white"
                />
              </g>
              <g opacity="0.5">
                <path
                  d="M13.7497 0H6.24988C2.7987 0 0 2.7987 0 6.24988V13.7497C0 17.2009 2.7987 19.9996 6.24988 19.9996H13.7497C17.2009 19.9996 19.9996 17.2009 19.9996 13.7497V6.24988C19.9996 2.7987 17.2009 0 13.7497 0ZM18.1246 13.7497C18.1246 16.1622 16.1622 18.1246 13.7497 18.1246H6.24988C3.83742 18.1246 1.87496 16.1622 1.87496 13.7497V6.24988C1.87496 3.83742 3.83742 1.87496 6.24988 1.87496H13.7497C16.1622 1.87496 18.1246 3.83742 18.1246 6.24988V13.7497Z"
                  fill="white"
                />
                <path
                  d="M9.99978 5C7.23858 5 4.99988 7.23871 4.99988 9.9999C4.99988 12.7611 7.23858 14.9998 9.99978 14.9998C12.761 14.9998 14.9997 12.7611 14.9997 9.9999C14.9997 7.23871 12.761 5 9.99978 5ZM9.99978 13.1248C8.27731 13.1248 6.87484 11.7224 6.87484 9.9999C6.87484 8.27619 8.27731 6.87496 9.99978 6.87496C11.7222 6.87496 13.1247 8.27619 13.1247 9.9999C13.1247 11.7224 11.7222 13.1248 9.99978 13.1248Z"
                  fill="white"
                />
                <path
                  d="M15.3733 5.29146C15.7412 5.29146 16.0395 4.99317 16.0395 4.62522C16.0395 4.25727 15.7412 3.95898 15.3733 3.95898C15.0053 3.95898 14.707 4.25727 14.707 4.62522C14.707 4.99317 15.0053 5.29146 15.3733 5.29146Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex w-full flex-col border-r pr-32 pt-20 pl-20 p-12 gap-8">
          <h4 className="font-semibold">Expertise</h4>
          <div className="flex flex-col w-[200px] gap-4">
            <span>Design</span>
            <span>Specialist Expertise</span>
            <span>Commercial Advice</span>
            <span>Traffic & Transport</span>
          </div>
        </div>
        <div className="flex w-full flex-col border-r pr-32 pt-20 pl-16 p-12 gap-8">
          <h4 className="font-semibold">Sectors</h4>
          <div className="flex flex-col gap-4">
            <span>Road</span>
            <span>Tunner</span>
            <span>Bridge</span>
            <span>Others +</span>
          </div>
        </div>
        <div className="flex flex-col w-full pr-16 pt-20 pl-16 p-12 gap-4">
          <h4 className="font-semibold">Our Buisness</h4>
          <h4 className="font-semibold">Work With Us</h4>
          <h4 className="font-semibold">Projects</h4>
          <h4 className="font-semibold">News</h4>
        </div>
        <div className="flex flex-col w-full pr-32 pt-20 pl-16 p-12 gap-4">
          <h4 className="font-semibold">Our Capabilities</h4>
          <h4 className="font-semibold">Engineers</h4>
          <h4 className="font-semibold">Contact</h4>
        </div>
      </div>

      <div className="flex bg-[#000000] border-t  flex-row justify-between px-12 py-6 items-center">
        <p className="text-lg font-inter text-white">
          2021 Case International. All right reserved.
        </p>
        <div className="flex gap-12">
          <span className="text-lg font-inter text-white">
            Terms & Condition
          </span>
          <span className="text-lg font-inter text-white">Privacy Policy</span>
        </div>
      </div>
    </>
  );
}

export default App;
