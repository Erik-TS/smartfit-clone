import Image from 'next/image'

function FeatureCard(props){
    return(
        <div className="feature-card my-5">
            <div className='feature-card-container'>
                <Image src={props.img} width={'300%'} height={'450%'} />
                <div className='mx-1'>
                    <div className="feature-card-desc">
                        <div>{props.title}</div>
                        <p>{props.desc}</p>
                        <div className='feature-card-button'>
                            <input className="btn" value={props.button} type={'button'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard