import Navbar from "./components/Navbar"
import Image from 'next/image'
import PlansSection from './components/PlansSection'
import AppArea from './components/AppArea'
import Features from './components/Features'
import CovidArea from './components/CovidArea'
import Ecosystem from './components/Ecosystem'
import Subscription from './components/Subscription'
import PageFooter from './components/PageFooter'

function Homepage(props){
    return(
        <>
            <Navbar />
            <Image width={'1920px'} height={'860px'} src={'https://assets.smartfit.com.br/attachments/0e792720b8241c0c0021c5c8e5ee241e53031742/store/44cb48af6c3187ba1647341b323e50df68c19d1d41d01d839bdd47dd24bd/banner_desktop'} />
            <PlansSection />
            <AppArea />
            <Features />
            <CovidArea />
            <Ecosystem />
            <Subscription />
            <PageFooter />
        </>
    )
}

export default Homepage