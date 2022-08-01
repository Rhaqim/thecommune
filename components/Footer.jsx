import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setSocial(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-[1240] mx-auto bg-[#A1A1A1] justify-center items-center text-center py-16 px-5">
      <div className="py-[3rem]">
        <h1 className="text-black text-5xl">Reach Us</h1>
      </div>
      <div className="">
        <ul className="text-black grid lg:grid-cols-3 sm:grid-cols-1">
          <li>
            <a href={"#"}>
              <FaFacebook style={{ color: "#3b5998" }} size={20} />
            </a>
          </li>
          <li>
            <a href={"#"}>
              <FaInstagram style={{ color: "#e1306c" }} size={20} />
            </a>
          </li>
          <li>
            <a href={"#"}>
              <FaTwitter style={{ color: "#00acee" }} size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
