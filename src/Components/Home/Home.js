import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Home.css'
export default function Home({ navigation }) {
    const history = useHistory()
    const [submenu, setSubmenu] = useState(false)
    return (
        <div>
            <header>
                Proof of concept
            </header>
            <main>
                <aside>
                    <ul>
                        <li id={'box1'} onMouseEnter={() => setSubmenu(true)}>Product</li>
                        <li onMouseEnter={()=> setSubmenu(false)} id={"box2_and_3"} onClick={() => history.push('/master2')}>About</li>
                        <li id={"box2_and_3"} onClick={() => history.push('/master3')}>Contact</li>
                    </ul>
                </aside>
                <section  onMouseLeave={() => setSubmenu(false)} >
                    {submenu ? <ul>
                        <li onClick={() => { history.push('/master1_1/test/ABC') }} id={'sub_box1'}>Product 1</li>
                        <li onClick={() => { history.push('/master1_2') }} id={'sub_box1'}>Product 2</li>
                    </ul> : null}
                </section>
            </main>
        </div>
    )
}
