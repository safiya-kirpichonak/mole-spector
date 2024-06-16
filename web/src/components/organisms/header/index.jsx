import React from "react";

import NavBar from "../../molecules/nav-bar";
import contacts from "../../../data/contacts.json";
import ContactBar from "../../molecules/contact-bar";

const Header = ({ auth }) => {
  return (
    <div>
      <ContactBar email={contacts[0].data} />
      <NavBar auth={auth} />
    </div>
  );
};

export default Header;
