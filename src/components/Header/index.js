import React from "react";
import './style.scss'

import { AiOutlineSearch } from 'react-icons/ai'

export default function Header(){

    return(
        <header> 
            <div className="container">
                <nav>
                    <p>Name Blog</p>
                    <p>Blog</p>
                </nav>
                <label>
                    <AiOutlineSearch size={24}/>
                    <input type="text" placeholder="Pesquisar no blog"/>
                </label>
            </div>
        </header>
    )
}
