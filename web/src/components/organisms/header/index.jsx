import React from "react";

import NavBar from "../../molecules/nav-bar";
import contacts from "../../../data/contacts.json";
import ContactBar from "../../molecules/contact-bar";

const Header = () => {
  return (
    <div>
      <ContactBar email={contacts[0].data} />
      <NavBar />
    </div>
  );
};

export default Header;
