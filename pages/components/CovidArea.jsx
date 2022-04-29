import Image from 'next/image'
import CovidCard from './sub-components/CovidCard'

function CovidArea(props){
    return(
        <div className='covid-area text-center'>
            <h2>Vamos vencer <span style={{color: '#ffb612'}}>A COVID-19</span></h2>
            <p> <strong>Precisamos da sua ajuda.</strong> Só assim, vamos conseguir deixar a Smart Fit um lugar mais seguro para todos. </p>
            <div className="covid-area-mudancas">
                <h2>Mudanças importantes </h2>
                <div className="row covid-card-row">
                    <div className="col">
                        <CovidCard title={'Desinfecção completa'} desc={<>Desinfectamos todas as academias com <span style={{fontWeight: 'bold'}}>aparelho nebulizador</span> de 2 a 3 vezes por dia</>} img={'https://cdn.smartfit.com.br/covid/icon-desinfeccao.png'} />
                    </div>
                    <div className="col">
                        <CovidCard title={'Distância entre aparelhos'} desc={<>Desativamos metade dos aparelhos de cardio para manter uma <strong>distância segura</strong> entre os clientes</>} img={'https://cdn.smartfit.com.br/covid/icon-distancia.png'} />                    
                    </div>
                    <div className="col">
                        <CovidCard title={'Agende seu horário'} desc={<>Vamos evitar aglomeração. Antes de ir à academia <strong>agende seu horário aqui</strong></>} img={'https://cdn.smartfit.com.br/covid/icon-agende.png'} />                    
                    </div>
                    <div className="col">
                        <CovidCard title={'Termômetro digital'} desc={<>Vamos medir sua temperatura na recepção. Se estiver <strong>acima de 37.8º C</strong> volte para casa por favor</>} img={'https://cdn.smartfit.com.br/covid/icon-termometro.png'} />                    
                    </div>
                    <div className="col">
                        <CovidCard title={'Uso de máscaras'} desc={<>A máscara é obrigatória. <strong>Toda nossa equipe</strong> usará máscaras assim como os <strong>alunos</strong></>} img={'https://cdn.smartfit.com.br/covid/icon-usaremos-mascara.png'} />                    
                    </div>
                    <div className="col">
                        <CovidCard title={'Tapetes de higienização'} desc={<>Temos tapetes na entrada para você <strong>higienizar seus tênis</strong></>} img={'https://cdn.smartfit.com.br/covid/icon-tapetes.png'} />
                    </div>
                </div>
                <input type={'button'} value={'SAIBA MAIS'} />
            </div>
        </div>
    )
}

export default CovidArea