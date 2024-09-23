import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. FOREVER is the
            ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories,
            jewellery and more. It is time to redefine your style statement with
            our treasure-trove of trendy items. Our online store brings you the
            latest in designer products straight out of fashion houses. You can
            shop online at FOREVER from the comfort of your home and get your
            favourites delivered right to your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600  cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery</li>
            <li>Press & Media</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
