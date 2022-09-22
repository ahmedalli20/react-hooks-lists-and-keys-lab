import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const navLinks = links.map((link)=>{
  return <a key={link} href={"#" +link}>{link}</a>;
});
  return(
  <nav>
    <ul>
      <li>{navLinks}</li>
    </ul>
  </nav>
  
  );
}

export default NavBar;
