import React,{Component} from 'react';


class Home extends Component{

  render(){
    return(
      <div>
        <header>
          <h1> Home </h1>
        </header>
        <main>
          {this.props.children}

        </main>
      </div>


    )
  }

}

export default Home;
