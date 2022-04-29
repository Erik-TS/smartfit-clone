function Subscription(props){
    return(
        <div className="subscription">
            <div className="subscription-box">
                <p className="mb-0 pb-3">Receba novidades e promoções exclusivas da Smart Fit.</p>
                <input type={'text'} placeholder={'Informe aqui o seu e-mail'} />
                <input className="" type={'button'} value={'CADASTRAR'} />
            </div>
        </div>
    )
}

export default Subscription