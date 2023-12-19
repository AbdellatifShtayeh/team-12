import React from "react";
import "./NavBar.css";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import 'primeicons/primeicons.css';
import { TfiAnnouncement } from "react-icons/tfi";

function NavBar(){
  const items = [
    {
      label: "Demo",
      items: [],
    },
    {
      label: "Pages",
      items: [],
    },
    {
      label: "Account",
      items: [],
    },
    {
      label: "My Network",
    },
  ];
  return (
    <div className="nav-bar-container">
      <div className="container">
        <div className="left-side">
        <i class="bi bi-search fs-5 snipcss0-7-16-17">
</i>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            icon={<TfiAnnouncement size={25} />}
          ></Button>
          <InputText placeholder="Search" type="text" className="w-full" />
        </div>
        <div className="right-side">
          <Menubar model={items} className="menu" />
          <Button icon="pi pi-comment" />
          <Button icon="pi pi-cog" />
          <Avatar
            className="p-overlay-badge"
            icon="pi pi-bell"
            size="large"
            id="bell"
          >
            <Badge severity="danger" />
          </Avatar>
          <Avatar
            className="p-overlay-badge profile"
            image="https://designyourownblog.com/wp-content/uploads/2020/11/create-perfect-profile-photo-2em.jpg"
            size="large"
          />
        </div>
      </div>
    </div>
  );
}
export default NavBar;




