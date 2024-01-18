import React from 'react'
import './Navbar.css';
import MidbarCard from './MidbarCard';
import { Link } from 'react-router-dom';

const MidbarList = () => {
  return (
    <div>
        <ul className='navList'>
            <li><Link to={'/products'}> NEW IN </Link>
            
            </li>
            <li><Link to={'/products'}>NEW INRIMZIM DADU X FABALLEY</Link>
             
            </li>
            <li><Link to={'/products'}>WINTERWEAR</Link> </li>
            <li><Link to={'/products'}>CLOTHING </Link>
             
            </li>   
            <li><Link to={'/products'}>TOPS</Link>
           
            </li>
            <li><Link to={'/products'}>DRESSES</Link></li>
            <li className='hideLists'><Link to={'/products'}>CO-ORDS</Link></li>
            <li className='hideLists'><Link to={'/products'}>ALLSTYLES</Link></li>
            <li className='hideLists'><Link to={'/products'}>CURVE</Link></li>
            <li className='hideLists'><Link to={'/products'}>LOOKBOOKS</Link></li>
            <li><Link to={'/products'}>SALE</Link></li>
        </ul>
    </div>
  )
}

export default MidbarList

//








// 
// 
// 
// 
