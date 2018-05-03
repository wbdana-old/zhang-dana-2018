import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { NavLink }  from 'react-router-dom'

const NavBar = () => {

  return(
    <Container fluid id='NavBar'>
      <Menu inverted stackable>

        <NavLink to='/' exact className='navbaritem'>
          <Menu.Item name='home'>
            <Icon name='home' className='navbaritem' />Home
          </Menu.Item>
        </NavLink>

        <NavLink to='/schedule' exact className='navbaritem'>
          <Menu.Item name='schedule' className='navbaritem'>
            <Icon name='clock' className='navbaritem' />Schedule
          </Menu.Item>
        </NavLink>

        <NavLink to='/rsvp' exact className='navbaritem'>
          <Menu.Item name='rsvp' className='navbaritem'>
            <Icon name='check' className='navbaritem' />RSVP
          </Menu.Item>
        </NavLink>

        <NavLink to='/maps' exact className='navbaritem'>
          <Menu.Item name='maps' className='navbaritem'>
            <Icon name='map signs' className='navbaritem' />Maps
          </Menu.Item>
        </NavLink>


        <NavLink to='/lodging' exact className='navbaritem'>
          <Menu.Item name='lodging' className='navbaritem'>
            <Icon name='hotel' className='navbaritem' />Lodging
          </Menu.Item>
        </NavLink>

        <NavLink to='/registry' exact className='navbaritem'>
          <Menu.Item name='registry' className='navbaritem'>
            <Icon name='gift' className='navbaritem' />Registry
          </Menu.Item>
        </NavLink>

        <NavLink to='/contact' exact className='navbaritem'>
          <Menu.Item name='contact' className='navbaritem'>
            <Icon name='address card outline' className='navbaritem' />Contact
          </Menu.Item>
        </NavLink>

      </Menu>
    </Container>
  )
}

export default NavBar
