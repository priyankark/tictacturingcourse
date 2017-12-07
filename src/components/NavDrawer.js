import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import {NavToggleButton} from '../styled/NavDrawer';
import {Link} from 'react-router';
export default class NavDrawer extends Component{

state={
  open:true,
  width:250
}

toggle=()=>{
  this.setState((prevState,props)=>{
      return {
        open:!prevState.open
      }
    })
}

render()
{
  return(
  <div>
    <NavToggleButton width={this.state.width} toggle={this.toggle} open={this.state.open} />
    <Divider/>
    <Drawer
      open={this.state.open}
      width={this.state.width}
    >
      <div
        style={{
          height:'200px',
          width:'100%',
          backgroundColor:'salmon'
        }}
      >
        Login Container
      </div>
      <Link to={'/'}>
      <MenuItem onTouchTap={this.toggle}
      primaryText={'Play'}
      />
      </Link>
      <Link to={'/profile'}>
      <MenuItem onTouchTap={this.toggle}
      primaryText={'Profile'}
      />
      </Link>
    </Drawer>
  </div>
  )

}
}
