import React,{Component} from 'react';
import {Stage} from 'react-konva';
import {Board} from '../styled/TicTacToe';

class TicTacToe extends Component{
  state={
    rows:3,
    size:0,
    unit:0

  }

  componentWillMount()
  {
    let height=window.innerHeight;
    let width=window.innerWidth;
    let size=(height<width)?height*0.8:width*0.8;
    let rows=this.state.rows;
    let unit=size/rows;

    this.setState({size:size,rows:rows,unit:unit});
  }

  move=()=>{

  }

  makeAiMove=()=>{

  }

  turingTest=()=>{

  }
  recordGame=()=>{

  }

  render(){
    return(
      <div>
        <Stage width={this.state.size} height={this.state.size}>
          <Board unit={this.state.unit} size={this.state.size} rows={this.state.rows}/>
          {/*<Square>*/}
        </Stage>
      </div>


    )
  }

}

export default TicTacToe;
