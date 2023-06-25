import React from "react";
import Image from "next/image";
import { useState } from "react";
function Rating({ rating, setRating, setShowThanks }) {
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const handleSubmit = () => {
    if(!rating) return;
    setShowThanks(true);
  }

  const rateTailwindcss =
    "bg-gray-700 w-10 h-10 rounded-full flex justify-center text-2xl hover:bg-yellow-600 hover:scale-125";
  return (
    <div className="font-serif bg-black text-white h-[100vh]">
      <div className="bg-gray-800 absolute top-52 left-28 rounded-md p-10 flex flex-col justify-center">
        <Image src={`/next.svg`} width={80} height={40} alt="icon" />
        <h1 className="mt-2 text-lg font-bold  ">How do I do ?</h1>
        <p className="text-xs">
          Please let me know how I did this stuff. Your rate will support me.
          Any rating is welcome.
        </p>

        <div>
          <ul className="flex gap-3 mx-20 my-10 cursor-pointer">
            <li
              className={
                activeRating.oneStar
                  ? rateTailwindcss + " active"
                  : rateTailwindcss
              }
              onClick={() => {
                setActiveRating({
                  oneStar: true,
                });
                setRating(1);
              }}
            >
              1
            </li>
            <li
              className={
                activeRating.twoStars
                  ? rateTailwindcss + " active"
                  : rateTailwindcss
              }
              onClick={() => {
                setActiveRating({
                  twoStars: true,
                });
                setRating(2);
              }}
            >
              2
            </li>
            <li
              className={
                activeRating.threeStars
                  ? rateTailwindcss + " active"
                  : rateTailwindcss
              }
              onClick={() => {
                setActiveRating({
                  threeStars: true,
                });
                setRating(3);
              }}
            >
              3
            </li>
            <li
              className={
                activeRating.fourStars
                  ? rateTailwindcss + " active"
                  : rateTailwindcss
              }
              onClick={() => {
                setActiveRating({
                  fourStars: true,
                });
                setRating(4);
              }}
            >
              4
            </li>
            <li
              className={
                activeRating.fiveStars
                  ? rateTailwindcss + " active"
                  : rateTailwindcss
              }
              onClick={() => {
                setActiveRating({
                  fiveStars: true,
                });
                setRating(5);
              }}
            >
              5
            </li>
          </ul>

          <button
            className="mx-20 w-60 h-10 bg-gray-600 rounded-md hover:bg-yellow-700 hover:scale-105"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rating;
