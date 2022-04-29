import Image from 'next/image'

function Ecosystem(props){
    return(
        <div className="ecosystem">
            <h2>Tudo o que você <span style={{color: '#ffb612'}}>precisa</span></h2>
            <p> Um ecossistema fitness que oferece mais liberdade na hora de treinar. </p>
            <div className="row">
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_aulas.jpg" width={'396px'} height={'396px'} />
                        <p>Aulas de ginástica + FIT DANCE</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_musculacao.jpg" width={'396px'} height={'396px'} />
                        <p>Musculação</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_funcional.jpg" width={'396px'} height={'396px'} />
                        <p>Funcional</p>
                    </div>
                </div>                
            </div>
            <div className="row">
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_cardio.jpg" width={'396px'} height={'396px'} />
                        <p>Cardio</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_fitness-remote.jpg" width={'396px'} height={'396px'} />
                        <p>Treinos para fazer onde quiser</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ecosystem-square">
                        <Image src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_fitness-app.jpg" width={'396px'} height={'396px'} />
                        <p>Tudo na palma da mão</p>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Ecosystem