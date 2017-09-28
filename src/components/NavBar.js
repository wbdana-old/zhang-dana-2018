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

        <NavLink to='/info' exact>
          <Menu.Item name='info'>
            <Icon name='info' />Info
          </Menu.Item>
        </NavLink>

        <NavLink to='/rsvp' exact>
          <Menu.Item name='rsvp'>
            <Icon name='check' />RSVP
          </Menu.Item>
        </NavLink>

        <NavLink to='/maps' exact>
          <Menu.Item name='maps'>
            <Icon name='map signs' />Maps
          </Menu.Item>
        </NavLink>

        <NavLink to='/schedule' exact>
          <Menu.Item name='schedule'>
            <Icon name='clock' />Schedule
          </Menu.Item>
        </NavLink>

        <NavLink to='/lodging' exact>
          <Menu.Item name='lodging'>
            <Icon name='hotel' />Lodging
          </Menu.Item>
        </NavLink>

        <NavLink to='/registry' exact>
          <Menu.Item name='registry'>
            <Icon name='gift' />Registry
          </Menu.Item>
        </NavLink>

        <NavLink to='/contact' exact>
          <Menu.Item name='contact'>
            <Icon name='address card outline' />Contact
          </Menu.Item>
        </NavLink>

      </Menu>
    </Container>
  )
}

export default NavBar
