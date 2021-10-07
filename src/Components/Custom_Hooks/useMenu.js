import { faCoffee, faPowerOff, faAddressBook, faAddressCard, faDumpster, faFileInvoice, faFileAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function useMenu() {
    const value = [
        {
            menu_name: 'Product',
            path: '/',
            expand: false,
            icon: faProjectDiagram,
            subMenu: [
                {
                    menu_name: 'Product 1',
                    path: '/',
                    expand: false,
                    icon: faPowerOff,
                },
                {
                    menu_name: 'Product 2',
                    path: '/',
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
            subMenu:[]
        },
        {
            menu_name: 'Contact',
            path: '/',
            expand: false,
            icon: faAddressBook,
            subMenu:[]
        },
        {
            menu_name: 'Clearance',
            path: '/',
            expand: false,
            icon: faDumpster,
            subMenu:[]
        },
        {
            menu_name: 'Tax',
            path: '/',
            expand: false,
            icon: faFileInvoice,
            subMenu:[]
        },
        {
            menu_name: 'Update Form',
            path: '/',
            expand: false,
            icon: faFileAlt,
            subMenu:[]
        }
    ]
    return value;
}
