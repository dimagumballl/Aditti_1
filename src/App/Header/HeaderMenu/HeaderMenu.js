import React from 'react'
import {Link} from 'react-router-dom'


function HeaderMenu() {
    return (
        <ul className="headerMenu">
            <li  className="WithSeason">
                <button>ПОМОЩЬ</button>
            </li>
            <li  className="WithSeason">
               <Link to="/"><button>ВСЯ КОЛЕКЦИЯ</button></Link>
            </li>
            <li className="WithSeason">
                <button>ПЛАТТЯ</button>
            </li>
            <li>
            <button>БЛУЗКИ</button>
            </li>
            <li  className="WithSeason">
                <button>БРЮКИ, ЮБКИ</button>
            </li>
            <li>
                <button>ВЯЗАНАЯ</button>
            </li>
            <li  className="WithSeason">
                <button>ДЖИНСЫ</button>
            </li>
            <li  className="WithSeason">
                <button>ВЕРХ. ОДЕЖДА</button>
            </li>
            <li  className="WithSeason">
                <button>ОБУВЬ</button>
            </li>
            <li>
                <button>СУМКИ</button>
            </li>
        </ul>
    );
  }
  export default HeaderMenu