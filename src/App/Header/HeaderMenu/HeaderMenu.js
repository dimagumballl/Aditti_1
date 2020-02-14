import React from 'react'
import {Link} from 'react-router-dom'


function HeaderMenu() {
    return (
        <ul className="headerMenu">
            <li  className="WithSeason">
                <Link to="/Help"><button>ПОМОЩЬ</button></Link>
            </li>
            <li  className="WithSeason">
               <Link to="/"><button>ВСЯ КОЛЕКЦИЯ</button></Link>
            </li>
            <li className="WithSeason">
               <Link to="/Platty"><button>ПЛАТТЯ</button></Link>
            </li>
            <li>
           <Link to="/Bluzka"><button>БЛУЗКИ</button></Link>
            </li>
            <li  className="WithSeason">
               <Link to="/Bruki"><button>БРЮКИ</button></Link>
            </li>
            <li>
               <Link to="/Vyzanoe"><button>ВЯЗАНАЯ</button></Link>
            </li>
            <li  className="WithSeason">
               <Link to="/Dzins"><button>ДЖИНСЫ</button></Link>
            </li>
            <li  className="WithSeason">
               <Link to="/VerhOdezda"><button>ВЕРХ. ОДЕЖДА</button></Link>
            </li>
            <li  className="WithSeason">
               <Link to="/Obuv"><button>ОБУВЬ</button></Link>
            </li>
            <li>
               <Link to="/Sumka"><button>СУМКИ</button></Link>
            </li>
        </ul>
    );
  }
  export default HeaderMenu