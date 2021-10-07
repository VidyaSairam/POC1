import { faCoffee, faPowerOff, faAddressBook, faAddressCard , faDumpster, faFileInvoice, faFileAlt} from '@fortawesome/free-solid-svg-icons';

export default function useMenu() {
    const value = [
        {
            menu_name: 'Product',
            path:'/',
            expand : false,
            icon : faPowerOff    
        },
        {
            menu_name: 'About',
            path:'/',
            expand : false    ,
            icon : faAddressCard
        },
        {
            menu_name: 'Contact',
            path:'/',
            expand : false,
            icon:faAddressBook
        },
        {
            menu_name: 'Clearance',
            path:'/',
            expand : false    ,
            icon : faDumpster
        },
        {
            menu_name: 'Tax',
            path:'/',
            expand : false,
            icon: faFileInvoice    
        },
        {
            menu_name: 'Update Form',
            path:'/',
            expand : false ,
            icon: faFileAlt
        }
    ]
    return value;
}
