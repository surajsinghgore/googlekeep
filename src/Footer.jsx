import react from 'react';
import './css/Footer.css';
const Footer=()=>{
    const year=new Date().getFullYear();
return(
    <>
<footer>
All right Reserved @{year}

</footer>
    </>
)
}

export default Footer;