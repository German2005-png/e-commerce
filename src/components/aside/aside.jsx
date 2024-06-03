import React from 'react'
import rightIcon from "../../../public/svg/right.svg";
import { Link } from 'react-router-dom';

export function Aside({products}) {
    const categoryAside = ["Beauty", "Fragrances", "Furniture", "Groceries"];
  return (
    <aside className='cont-aside'>
        <h3 className='aside-title'>Categories</h3>
        <ul className='aside-ul'>
            {categoryAside.map((Element, index)=>(
                <li className='aside-li' key={index}><Link className='aside-li-a' to={`/${Element.toLocaleLowerCase()}`} title={Element}>{Element}<img src={rightIcon} /></Link></li>
            ))}
        </ul>
    </aside>
  )
}
