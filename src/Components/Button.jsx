import React from "react"; 

const Button = ({ text, link, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center font-libre">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center">
        {link ? (
          <a href={link} className="btn">
            <span>{text}</span>
          </a>
        ) : (
          <button onClick={onClick} className="btn">
            <span>{text}</span>
          </button>
        )}
      </div>
    </div>
  );
};

 
export default Button;
