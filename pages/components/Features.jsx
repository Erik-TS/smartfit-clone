import Image from "next/image"
import FeatureCard from "./sub-components/FeatureCard"

function Features(props){
    return(
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FeatureCard img={'https://cdn.smartfit.com.br/nova-home/images/cta-new-nutri.jpg'} button={'Baixar Agora'} desc={'Tenha consultas online com nutricionistas para mudar sua alimentação de um jeito simples e saudável.'} title={'Smart Fit Nutri'} />
                    </div>
                    <div className="col">
                        <FeatureCard img={'https://cdn.smartfit.com.br/nova-home/images/cta-new-coach.jpg'} button={'Agendar atendimento'} desc={'Tenha mais motivação e ajuste sua rotina com um professor sempre por perto'} title={'Smart Fit Coach '} />                        
                    </div>
                    <div className="col">
                        <FeatureCard button={'Conheça os produtos'} img={'https://assets.smartfit.com.br/production/newHome/supps.png'} desc={'A suplementação inteligente que te ajuda a potencializar os seus resultados.'} title={'Smart Fit Supps'} />
                    </div>
                    <div className="col">
                        <FeatureCard button={'Inscrever-se'} img={'https://cdn.smartfit.com.br/nova-home/images/cta-new-go.jpg'} desc={'O melhor da sua academia na sua casa! Aproveite suas aulas online onde e quando quiser.'} title={'Smart Fit GO'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features