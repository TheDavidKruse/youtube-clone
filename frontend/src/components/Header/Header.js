import React from 'react'
import { Header, Icon, Menu, Input } from 'semantic-ui-react'


const HeaderBar = (props) => {
  return (
    <Menu secondary>
      <Menu.Item>
        <Icon name='sidebar' onClick={() => props.toggleNav()} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  )
}

export default HeaderBar