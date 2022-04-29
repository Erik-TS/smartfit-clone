import Image from 'next/image'

function CovidCard(props){
    return(
        <div className="covid-card">
            <h5 className='mx-auto'>{props.title}</h5>
            <Image src={props.img} width={'100%'} height={'100%'} />
            <p>{props.desc}</p>
        </div>
    )
}

export default CovidCard