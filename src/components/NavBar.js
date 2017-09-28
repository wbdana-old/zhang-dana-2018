import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { NavLink }  from 'react-router-dom'

const NavBar = () => {

  return(
    <Container fluid className='NavBar'>
      <Menu>
        <NavLink to='/home' exact>
          <Menu.Item name='home'>
            <Icon name='home' />Home
          </Menu.Item>
        </NavLink>
      </Menu>
    </Container>
  )
}

export default NavBar
