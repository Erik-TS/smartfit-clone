import Plan from "./sub-components/Plan"

function PlansSection(props){

    const PlanBlack = [ 
        "Acesso ilimitado a todas áreas da academia",
        "Aulas de Ginástica",
        "Área de musculação e aeróbicos",
        "Smart Fit Go",
        "Acesso ilimitado às demais unidades da rede**",
        "Leve amigos para treinar com você",
        "Cadeira de massagem",
        "1 mês para presentear alguém" 
    ]

    const PlanSmart = [ 
        "Acesso ilimitado a todas áreas da academia",
        "Aulas de Ginástica",
        "Área de musculação e aeróbicos",
        "Smart Fit Go",
        "Sem taxa de cancelamento"
    ]

    const DescBlack = 'Treine em qualquer unidade Smart Fit na América Latina.'
    const DescSmart = 'Treine o quanto quiser na sua unidade, sem taxa de cancelamento.'
    
    return(
        <div className="text-white plans-section">
            <div className="plans-section-container mx-auto text-center">
                <h1 className="py-4">Escolha <span style={{color: 'yellow'}}>seu plano</span></h1>
                <p>Treine o quanto quiser com nossos planos. Todos oferecem áreas de musculação, aeróbico, aulas especiais e de ginástica </p>
                <div className="plans-area row">
                    <Plan descricao={DescBlack} type={'black'} diferenciais={PlanBlack} price={'119.90'} />
                    <Plan descricao={DescSmart} type={'smart'} diferenciais={PlanSmart} price={'79.90'} />
                </div>
            </div>
        </div>
    )
}

export default PlansSection