import React, { useState } from 'react'
import './Navbar.css'
import {BsHandbag} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const Topbar = () => {
  const [name,setName] = useState('')
  const [login,setLogin] = useState(false)
  let storeData = useSelector((storeData) => {
    return storeData.signUpDetails;
  })
  useEffect(()=>{
    setName(storeData[storeData.length-1].name);
    setLogin(localStorage.getItem('login'));
  },[storeData])
  // useEffect(()=>{
  //   setName(localStorage.getItem('user') || '');
  //   setLogin(localStorage.getItem('login') || false);
  // },[name,login])


  // console.log(storeData,"store data")
  // // let name = storeData[storeData.length-1];
  function changeLocal(){
    setName('');
    setLogin(false);
  }

 
  return (<div>
    <div className='topBar' style={{width:'100%',boxSizing:'border-box'}} >
        <div style={{padding: '10px'}}>
        <Link to={"/"}>
          <img
            style={{ width: "110px" }}
            // logo 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JonhG___v2lNJoIOtxq9KqjqDrwXPLM5adJ1YDNxHQ&s"
            alt=""
          />
        </Link>
        </div>
        <div style={{display:'flex'}}>
        </div>
        <div >
            <ul style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                {(name.length!=='')?<li onClick={changeLocal}>Logout</li>:<li><Link  to={'/login'}>Login</Link></li>}
                {(name.length!=='')?<li>{name}</li>:<li><Link to={'/signup'}>Sign up</Link></li>}
                <li><Link to={'/cart'}><BsHandbag/></Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Topbar