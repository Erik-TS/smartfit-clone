import Image from 'next/image'

function Navbar(props){
    return(
        <>
            <div className="my-navbar navbar navbar-dark bg-dark text-white navbar-expand-lg">
                <div className='container'>
                        <Image className='navbar-brand' width={'150px'} height={'60px'} src={'https://www.smartfit.com.br/packs/media/logo-cb8dd34d.svg'} />
                        <div className='navbar-collapse'>
                            <ul className='navbar-nav ms-auto'>
                                <li className='nav-item'>
                                    <a className='nav-link'>ACADEMIAS</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link'>ESPAÇO DO CLIENTE</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link'>SMART FIT NEWS</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link'>AGENDE SEU HORÁRIO</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link'>SMART FIT SUPPS</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Navbar