import React from 'react';

import facebook from './facebook.svg'
import viber from './viber.svg'
import youtube from './youtube.svg'
import instagram from './instagram.svg'
import visa from './visa.svg'
import mc from './mc.svg'
import privat from './privat.svg'
import './ForFooter.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
        <div className="row_0_2">
            <ul>
                <li>
                   <Link to="/Help"><button>О нас</button></Link> 
                </li>
                <li>
                <Link to="/Help"><button>Оплата</button></Link> 
                </li>
                <li>
                <Link to="/Help"><button>Доставка</button></Link> 
                </li>
                <li>
                <Link to="/Help"><button>Возврат</button></Link> 
                </li>
            </ul>
        </div>
        <div className="row_0_6">
            <ul>
                <li>
                    Мы в соцсетях
                </li>
                <li>
                    <ul className="cont">
                        <li>
                            <img src={facebook}/>
                        </li>
                        <li>
                            <img src={viber}/>
                        </li>
                        <li>
                            <img src={youtube}/>
                        </li>
                        <li>
                            <img src={instagram}/>
                        </li>
                    </ul>
                </li>
                <li>
                    Способы оплаты
                </li>
                <li>
                    <ul className="cont">
                        <li>
                            <img src={visa}/>
                        </li>
                        <li>
                            <img src={mc}/>
                        </li>
                        <li>
                            <img src={privat}/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="row_0_2">
            <ul>
                <li>
                    <button>Нужна помощь?</button>
                </li>
                <li>
                    <br/>
                    <button>0 800 *** *** (бесплатно)</button>
                </li>
                <li>
                    <button>пн-пт: с 9:00 до 18:00</button>
                </li>
                <li>
                    <button>сб: с 9:00 до 17:00</button>
                </li>
                <li>
                    <br/>
                    <button>info@dressa.com.ua</button>
                </li>
            </ul>
        </div>
    </div>
    );
  }
  export default Footer