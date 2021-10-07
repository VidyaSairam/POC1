import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useMenu from '../Custom_Hooks/useMenu'
import './Home.css'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPowerOff, faAddressBook, faAddressCard, faDumpster, faFileInvoice, faFileAlt } from '@fortawesome/free-solid-svg-icons';
export default function Home({ navigation }) {
    const history = useHistory()
    const [submenu, setSubmenu] = useState(false)
    const [menu, setMenu] = useState([]);
    const local_menu = useMenu();
    const [aside_menuToggle, setAside_menuToggle] = useState(false)

    useEffect(() => {

        setMenu(local_menu);

    }, [])


    const handleToggle = (index) => {
        const menuList = menu
        menuList.map((childItem, childIndex) => {
            if (childIndex == index) {
                childItem.expand = true
            }
            else {
                childItem.expand = false
            }
        })
        setMenu(menuList)
    }

    return (
        <div>
            <header>
                Proof of concept
            </header>
            <main>
                {
                    !aside_menuToggle ?
                        <aside className={'aside_toggleFalse'}>
                            <div className={'container'}>
                                <AiOutlineMenu className={'accordianContainer'} size={20} onClick={() => setAside_menuToggle(true)} />
                                <h3>Menu</h3>
                            </div>
                            <div className={'container_search'}>
                                <input type='text' placeholder={'search'} style={{ width: "70%" }} />
                                <AiOutlineSearch style={{ marginLeft: 10 }} size={20} />
                            </div>
                            {menu.map((item, index) => {
                                console.log(item.expand)
                                return (
                                    <div className={'accordianContainer'}>
                                        <div className={'accordian_containerFalse'} onClick={() => handleToggle(index)}>
                                            <div className={'menuIcon_and_Text'}>
                                            <FontAwesomeIcon icon={item.icon} />
                                                <li className={'aside_li_toggleFalse'}>{item.menu_name}</li>
                                            </div>
                                            <p className={'plus_button'}>+</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </aside>
                        :
                        <aside className={'aside_toggleTrue'}>
                            <div className={'container'}>
                                <AiOutlineMenu className={'accordianContainer'} size={20} onClick={() => setAside_menuToggle(false)} />
                            </div>
                            <div className={'container_search'}>
                                {/* <input type='text' placeholder={'search'} style={{ width: "70%" }} /> */}
                                <AiOutlineSearch size={20} />
                            </div>
                            {menu.map((item, index) => {
                                return (
                                    <div className={'accordianContainer'}>
                                        <div className={'accordian_containerTrue'} onClick={() => handleToggle(index)}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            <li className={'aside_li_toggleTrue'}>{item.menu_name}</li>
                                            {/* <p className={'plus_button'}>+</p> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </aside>
                }
            </main>
        </div>
    )
}
