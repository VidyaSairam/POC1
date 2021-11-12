import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import { Button } from "primereact/button";

import React, { useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { withRouter } from "react-router";
import { Sidebar } from "primereact/sidebar";

function Menu({ navigation, history }) {
  const [searchText, setSearchText] = useState("");
  const [visible, setVisible] = useState(false);

  const items = [
    {
      label: "Product",
      icon: "pi pi-fw pi-sitemap",
      isSubMenuExist: true,
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
      isSubMenuExist: false,

      command: (e) => {
        history.push("/about");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-user",
      isSubMenuExist: false,

      command: (e) => {
        history.push("/contact");
      },
    },
    {
      label: "Clearance",
      icon: "pi pi-fw pi-calendar",
      isSubMenuExist: false,

      command: (e) => {
        history.push("/clearance");
      },
    },
    {
      label: "Tax",
      icon: "pi pi-fw pi-sitemap",
      isSubMenuExist: false,

      command: (e) => {
        history.push("/tax");
      },
    },
    {
      label: "Update Form",
      icon: "pi pi-fw pi-sitemap",
      isSubMenuExist: false,

      command: (e) => {
        history.push("/");
      },
    },
  ];
  const [menu, setMenu] = useState(items);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    if (e.target.value == " " || e.target.value == "") {
      setMenu(items);
    } else {
      const res = [];
      menu.map((item, index) => {
        if (item.label.toLowerCase().includes(e.target.value.toLowerCase())) {
          if (!res.includes(item)) {
            res.push(item);
          }
        }
      });

      menu.map((item, index) => {
        if (item.isSubMenuExist) {
          item.items.map((childItem, childIndex) => {
            if (
              childItem.label
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            ) {
              if (!res.includes(childItem)) {
                res.push(childItem);
              }
            }
          });
        }
      });
      setMenu(res);
    }
  };

  return (
    <div>
      <div className="card" style={{ zIndex: "1111111" }}>
        <input type="text" value={searchText} onChange={handleSearchText} />
        <Button
          icon="pi pi-align-justify"
          onClick={(e) => setVisible(!visible)}
        />

        <Sidebar
          visible={visible}
          position="left"
          onHide={() => setVisible(false)}
          showCloseIcon={false}
          // baseZIndex={1}
          // modal={false}
        >
          <PanelMenu model={menu} style={{ width: "14rem" }} />
        </Sidebar>
      </div>
    </div>
  );
}

export default withRouter(Menu);
