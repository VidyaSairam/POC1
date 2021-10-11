import { faCoffee, faPowerOff, faAddressBook, faAddressCard, faDumpster, faFileInvoice, faFileAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function useMenu() {
    const value = [
        {
            menu_name: 'Product',
            path: '/',
            expand: false,
            icon: faProjectDiagram,
            isSubMenuExist : true,
            subMenu: [
                {
                    menu_name: 'Product1',
                    path: '/master1_1/test/ABC',
                    expand: false,
                    icon: faPowerOff,
                    isSubMenuExist : true,
                    subMenu: [
                        {
                            menu_name: 'Product1',
                            path: '/master1_1/test/ABC',
                            expand: false,
                            icon: faPowerOff,
                        }
                    ]
                },
                {
                    menu_name: 'Product2',
                    path: '/master1_2',
                    expand: false,
                    icon: faPowerOff,
                }
            ]
        },
        {
            menu_name: 'About',
            path: '/',
            expand: false,
            icon: faAddressCard,
            isSubMenuExist : false,
            subMenu:[]
        },
        {
            menu_name: 'Contact',
            path: '/',
            expand: false,
            icon: faAddressBook,
            isSubMenuExist : false,
            subMenu:[]
        },
        {
            menu_name: 'Clearance',
            path: '/clearance',
            expand: false,
            icon: faDumpster,
            isSubMenuExist : false,
            subMenu:[]
        },
        {
            menu_name: 'Tax',
            path: '/tax',
            expand: false,
            icon: faFileInvoice,
            isSubMenuExist : false,
            subMenu:[]
        },
        {
            menu_name: 'Update Form',
            isSubMenuExist : false,
            path: '/',
            expand: false,
            icon: faFileAlt,
            subMenu:[]
        }
    ]
    return value;
}
