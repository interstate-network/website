import React from 'react'
import styled from 'styled-components'

export default class Layout extends React.Component {
  render () {
    return (
            <Navbar className="flex items-center justify-between flex-wrap p-0 h-20">
            <div className="flex items-center align-middle flex-shrink-0 text-white mr-6">
            <img src="/static/logo.svg" width="108" height="108"/>
                <span className="font-semibold text-xl tracking-tight">Interstate Network</span>
            </div>
            </Navbar>
        
    )
  }
}


const Navbar = styled.nav`
    background-color: #041D2D !important;
    color: #fff;
`
