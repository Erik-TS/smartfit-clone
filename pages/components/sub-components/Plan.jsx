function Plan(props){
    return(
        <div className={"plan-frame bg-light mx-auto " + props.type}>
            <div className="plan-head">
                <div className="plan-head-text pb-5">
                    <p>PLANO</p>
                    <h2 className="plan-head-text-type"><span className={props.type}>{props.type.toUpperCase()}</span></h2>
                </div>
                <div className="plan-head-price">
                    <h3>A PARTIR DE</h3>
                    <p className="preco-original">R$ {props.price}*</p>
                    <p className="preco-desconto">por <span>R$ 9,90*</span> </p>
                </div>
                <p className="plan-frame-descricao">{props.descricao}</p>
            </div>
            <hr className="mx-auto" />
            <div className="card-body">
                <div className="card-text">
                    <div className="plan-differentials">
                        <h5 className="text-muted mb-3">DIFERENCIAS</h5>
                        <ul className="ps-0" style={{listStyle: 'none'}}>
                            {props.diferenciais.map( (value, index) => {
                                return <li className="fw-bold mb-3" key={index}>{value}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="plan-frame-button">
                <input type={'button'} className={"btn " + props.type} value={'APROVEITE'} />
            </div>
            <p className="consulte-texto">*Consulte o regulamento</p>

        </div>
    )
}

export default Plan