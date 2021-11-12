import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";

import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { withRouter } from "react-router";

function Menu({ navigation, history }) {
  const items = [
    {
      label: "Product",
      icon: "pi pi-fw pi-sitemap",
      items: [
        {
          label: "Product 1",
          icon: "pi pi-fw pi-sitemap",
          command: (e) => {
            history.push("/master1_1/test/ABC");
          },
        },
        {
          label: "Product 2",
          icon: "pi pi-fw pi-sitemap",
          command: (e) => {
            history.push("/master1_2");
          },
        },
      ],
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info-circle",
      command: (e) => {
        history.push("/about");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-user",
      command: (e) => {
        history.push("/contact");
      },
    },
    {
      label: "Clearance",
      icon: "pi pi-fw pi-calendar",
      command: (e) => {
        history.push("/clearance");
      },
    },
    {
      label: "Tax",
      icon: "pi pi-fw pi-sitemap",
      command: (e) => {
        history.push("/tax");
      },
    },
    {
      label: "Update Form",
      icon: "pi pi-fw pi-sitemap",
      command: (e) => {
        history.push("/");
      },
    },
  ];

  return (
    <div>
      <div className="card">
        <PanelMenu model={items} style={{ width: "14rem" }} />
      </div>
    </div>
  );
}

export default withRouter(Menu);
