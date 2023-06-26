import React, { useState } from "react";

function NewLetter() {
  const [inputValue, setInputValue] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;

    if (emailRegex.test(inputValue)) {
      setIsValidEmail(true);
      setShowNotification(true);
      setInputValue("");
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } else if (isValidEmail) {
     setIsValidEmail(false)
    }
  };

  return (
    <div>
      <div className="absolute top-36 left-12 border-2 border-black/40 flex  justify-center items-center gap-4 rounded-md h-4/6">
        <div className="flex flex-col  gap-4 w-1/2 ">
          <h1 className="font-extrabold text-4xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="text-gray-400 list-disc pl-10">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <label>Email address</label>
          <input
            type="email"
            value={inputValue}
            onChange={handleChange}
            className={isValidEmail ? "border-2 border-black/60 rounded-md":"border-2 border-red-500 rounded-md"}
          />
          <button
            onClick={handleButtonClick}
            className="bg-yellow-500 p-3 rounded-lg hover:bg-yellow-400"
          >
            Subscribe to monthly newsletter
          </button>
          {showNotification && (
            <span className="bg-green-500 text-white flex justify-center p-1 rounded ">
              sent
            </span>
          )}
        </div>
        <div>
          <img
            src="/illustration-sign-up-desktop.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default NewLetter;
