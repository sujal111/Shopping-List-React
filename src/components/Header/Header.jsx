import suj from '../../assets/suj.jpeg'

import './Header.css';


function Header(){
    return (
    <div className="header-wrapper"> 
<h1
className='header_text'
>Shooping List</h1>   
<img className='header_image'
src={suj}
/>
</div>

    )
}

export default Header;