import styled from 'styled-components'
import Subscriber from './components/Subscriber'
import Layout from './components/layout';
import Navbar from './components/Navbar';
import '../styles/main.css'


const index = () => (
    <Layout>
        <Navbar/>
        <h1>Interstate Network is a hybrid layer2 proof-of-stake sidechain solution designed to scale Ethereum without compromising on security or computational complexity.</h1>
        <h2>
            <ul>
                <li>Seamlessly integrate</li>
                <li>Verifiable on mainnet</li>
            </ul>
        </h2>
        <h1>Team</h1>
        <h3>Ray Pulver</h3>
        <p>founding CTO of IDEX, a top 5 decentralized exchange</p>
        <h3>Dillon Kellar</h3>
        <p>finalist of EthNewYork and creator of exeDAO</p>
        <h3>Andy Zhu</h3>
        <p>former head of marketing and product manager at ninjaRMM</p>
        <h3>Nick Geoca</h3>
        <p>10 years of experience as full-stack developer, multiple startups</p>

        <h4>Links</h4>

        <Subscriber/>
    </Layout>
)

export default index;