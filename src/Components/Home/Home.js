import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useMenu from '../Custom_Hooks/useMenu'
import './Home.css'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPowerOff, faAddressBook, faAddressCard, faDumpster, faFileInvoice, faFileAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
export default function Home({ navigation }) {
    const history = useHistory()
    const local_menu = useMenu();
    const [menu, setMenu] = useState(local_menu);
    const [submenu, setSubmenu] = useState(false)
    const [aside_menuToggle, setAside_menuToggle] = useState(false)
    const [searchText, setSearchText] = useState("")



    const handleToggle = (index) => {
        const menuList = menu
        menuList[index].expand = !menuList[index].expand
        setMenu([])
        setTimeout(() => {
            setMenu(menuList)
        }, 1)
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.value)
        if (e.target.value == ' ' || e.target.value == '') {
            setMenu(local_menu)
        }
        else {
            const res = []
            menu.map((item,index)=>{
                if(item.menu_name.toLowerCase().includes(e.target.value.toLowerCase())){
                    console.log(e.target.value.toLowerCase())
                    if(!res.includes(item)){
                        res.push(item)
                    }
                    
                    if(item.isSubMenuExist){
                        item.subMenu.map((childItem,childIndex)=>{
                            if(childItem.menu_name.toLowerCase().includes(e.target.value.toLowerCase())){
                                if(!res.includes(childItem)){
                                    res.push(childItem)
                                }
                            }
                        })
                    }
                }
            })
            setMenu(res)
        }
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
                                <input type='text'
                                    placeholder={'Search'}
                                    style={{ width: "70%" }}
                                    value={searchText}
                                    onChange={handleSearchText}

                                />
                                <AiOutlineSearch style={{ marginLeft: 10 }} size={20} />
                            </div>
                            {menu.map((item, index) => {
                                return (
                                    <div className={'accordianContainer'}>
                                        <div className={'accordian_containerFalse'} onClick={
                                            !item.isSubMenuExist ? () => history.push(item.path) :
                                                () => handleToggle(index)}>
                                            <div className={'menuIcon_and_Text'}>
                                                <FontAwesomeIcon icon={item.icon} />
                                                <li className={'aside_li_toggleFalse'}>{item.menu_name}</li>
                                            </div>
                                            {!item.expand == true ?
                                                <p className={'plus_button'}>+</p> : <p className={'plus_button'}>-</p>
                                            }

                                        </div>
                                        {
                                            item.expand == true ?
                                                <div className={'submenu_container'}>
                                                    {item.subMenu.map((item, index) => {
                                                        return (
                                                            <li onClick={() => history.push(item.path)}>{item.menu_name}</li>
                                                        )
                                                    })}
                                                </div> : null
                                        }
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
