import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header primary>Navbar</Header>
  )
}

const Header = styled.div`
    color: ${({primary}) => primary ? 'red': 'blue'};
    font-size: 30px;
`

export default Navbar