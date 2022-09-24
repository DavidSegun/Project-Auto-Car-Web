import React, {useState} from 'react';
import styles from './NavBar.module.css';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import Logo from './images/logo.png'

const NavBar = () => {

const [nav, setNav]  = useState(false);   
    return (
            <>
            <header className={styles.header}>
            <img src = {Logo} alt = "logo"></img>
                </header>
                <nav>
                  <ul className={nav?[styles.menu,styles.active].join('') : [styles.menu]}>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <a href="/">Sign-Up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style = {{marginTop: '6px'}}/>
                    </li>
                    <li>
                        <AiOutlineUser  size={25} style= {{marginTop: '6px'}} />
                    </li>
                  </ul>
                </nav>
                <div onClick = {() => setNav(!nav)} className={styles.mobile_btn}>{nav ? <AiOutlineMenu size = {25}/> : <AiOutlineClose/>}</div>
                </>
            
        )

}
export default NavBar;