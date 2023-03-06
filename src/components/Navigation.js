import { Icon,Menu } from 'semantic-ui-react'
import React from 'react';
import '../styles/Navigation.css'


class Navigation extends React.Component {
  render() {
    return (
      <Menu className="wnavigation" id = "nav1">
        <Menu.Item name='home' href='/' />
        <Menu.Item name='products' href='/products' />
        <Menu.Item name='about' href='/about' />
        <Menu.Item name='contact' href='/contact' />
        <Menu.Menu position='right'>
          <Menu.Item>
              <Icon name='shopping cart' size='large' />
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

export default Navigation