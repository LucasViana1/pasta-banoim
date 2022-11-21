import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo" />
            <h1>Pasta de amendoim com casca de banana</h1>
        </header>
    )
}

export default Header