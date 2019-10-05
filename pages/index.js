import styled from 'styled-components'
import Subscriber from './components/Subscriber'
import Navbar from './components/Navbar'
import '../styles/main.css'
import Particle from './components/Particle'
import Router from "next/router"
import withGA from "next-ga"
import Head from "next/head"
import MediaQuery from 'react-responsive'

const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };


const index = () => (
    <div>
        <MediaQuery query="(min-device-width: 1025px)">
            <Particle/>
        </MediaQuery>
        <Navbar/>
        <Content>
            <Header>Interstate Network is a hybrid layer2 proof-of-stake sidechain designed to scale Ethereum without compromising on security.</Header>
            <br></br>
            <h2>Developer Friendly.</h2>
            <p>No SDK required. Write your code in Solidity as if you're deploying to mainnet.</p>
            <br></br>
            <h2>Fully Verifiable.</h2>
            <p>State-transitions and token transfers are verifiable on mainnet through our generalized fraud proof engine.</p>
            <br></br>
            <h2>Links</h2>
            <p>
            <a style={{textDecoration: "underline"}} href="https://vitalik.ca/general/2019/08/28/hybrid_layer_2.html">The dawn of Hybrid Layer 2 Protocols by Vitalik Buterin</a>
            </p>
            <div style={{height: "40px"}}></div>

            <Subscriber/>

        </Content>
        <Footer>
            <a href="mailto://hello@interstate.network">
                <img src="/static/interstate.svg" width="128" height="128" alt="Interstate Network"/>
            </a>  
            <ul>
                <li>
                    <a href="mailto://hello@interstate.network">Email</a>
                </li>
                <li></li>
                <li></li>
            </ul>  
        </Footer> 
    </div>
)

export default withGA("UA-149335263-1", Router)(index);


const Header = styled.h1`
font-size: 40px;
line-height: 1.2;
`


const Content = styled.div`
margin-top: 20px;
margin-left: auto;
margin-right: auto;
padding: 1em;
max-width: 832px;
min-width: 0;
width: 100%;
box-sizing: border-box;
overflow-wrap: break-word;
line-height: 2;


h2 {
    font-size: 30px;
}

p {
    padding: 0 10px;
}
`

const Footer = styled.footer`
margin-top: auto;
margin-left: auto;
margin-right: auto;
padding: 1em;
max-width: 800px;
overflow-wrap: break-word;
text-align: center;
display: block;

img {
    width: 128px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
}
`