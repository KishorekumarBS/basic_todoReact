import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>Copyright &copy;{currentYear} Kishorekumar</footer>
    </div>
  );
};
export default Footer;
