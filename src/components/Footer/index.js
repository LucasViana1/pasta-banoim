import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div>
                <div className='footer-links'>
                    <img 
                        src='https://cdn-icons-png.flaticon.com/512/152/152740.png'
                        alt='WhatsApp' 
                        style={{width:'30px'}}
                    />
                    <p>(11) 99999-8888</p>
                </div>

                <div className='footer-links'>
                    <img 
                        src='https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png'
                        alt='Instagram' 
                        style={{width:'30px'}}
                    />
                    <p>@creams_factoryoficial</p>

                </div>

                <div className='footer-links'>
                    <img 
                        src='https://cdn-icons-png.flaticon.com/512/561/561127.png'
                        alt='E-mail' 
                        style={{width:'30px'}}
                    />
                    <p>creamsfactory@gmail.com</p>
                </div>

                <div className='footer-links'>
                    <b>SAC</b>
                    <p>www.creamsfactory.com.br</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer