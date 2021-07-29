import react from 'react';
import './css/Header.css';
import logo from './images/1024px-Google_Keep_icon.svg.png';
const Header=()=>{
return(
    <>
<header>
<img src={logo} alt="logo not displayed" />
<h1>Google Keep</h1>
</header>
    </>
)
}

export default Header;