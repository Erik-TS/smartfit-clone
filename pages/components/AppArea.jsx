import Image from 'next/image'

function AppArea(props){
    return(
        <div className="app-area bg-white pt-5">
            <div className='app-area-paragraph'>
                <h2 className='fs-4 app-area-title'>Smart Fit App: uma experiência completa de treino, dentro e fora da academia </h2>
                <p>Não importa se você já é experiente ou se está começando a praticar atividade física agora, uma coisa é certa: ao baixar grátis o Smart Fit App, você ganha o melhor aliado para a sua rotina de treinos! Exclusivo para clientes. </p>
                <div>
                    <h2 className='app-area-qrcode-text'>Escaneie o código para baixar grátis </h2>
                    <div className='app-area-qrcode'>
                        <a>
                            <Image src={'https://assets.smartfit.com.br/production/newHome/qrcode.png'} width='113px' height={'113px'} />
                        </a>
                        <div className='google-play'>
                            <Image src={'https://assets.smartfit.com.br/production/newHome/google-play-badge.png'} width='137px' height={'41px'} />
                        </div>
                        <div className='app-store'>
                            <Image src={'https://assets.smartfit.com.br/production/newHome/apple-badge.png'} width='123px' height={'42px'} />
                        </div>
                    </div>
                </div>
            </div>
            <Image className='app-area-smartimage' src={'https://assets.smartfit.com.br/production/newHome/img-smartphone.png'} width={'499px'} height='624px' />
        </div>
    )
}

export default AppArea