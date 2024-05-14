import React from "react";

import ContactBar from "../../molecules/contact-bar";
import NavBar from "../../molecules/nav-bar";

import contacts from "../../../data/contacts.json";

const Header = ({ auth }) => {
  return (
    <div>
      <ContactBar email={contacts[0].data} />
      <NavBar auth={auth} />
    </div>
  );
};

export default Header;
