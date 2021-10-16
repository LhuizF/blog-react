import React, { useState } from "react";
import './style.scss'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export default function Article({date, title, text}){

    const [select, setSelect] = useState(false);

    return(      
        <div className="article-container">
            <div className="data-container">
                <p>{date}</p>
                {select? <AiFillHeart size={22} 
                    color="#574ae8" 
                    select="true"
                    onClick={() => setSelect(!select)}
                />: <AiOutlineHeart size={22} 
                color="#574ae8" 
                select="true"
                onClick={() => setSelect(!select)}
            />}
                
            </div>
            <p>{title}</p>
            <p>{text}</p>
        </div>      
    )
}
