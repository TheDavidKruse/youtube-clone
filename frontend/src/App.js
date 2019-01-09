import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Container, Sidebar } from 'semantic-ui-react';
import SideNav from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

class App extends Component {
  state={
    visible:false
  }

  toggleNav = () => {
    this.setState({visible: !this.state.visible})
  }
  render() {
    return (
      <Router>
        <Container style={{backgroundColor: "", minHeight:"100vh", minWidth:"100vw"}}>
        <Header toggleNav={this.toggleNav}/>
          <Sidebar.Pushable>
            <SideNav visible={this.state.visible}/>
            <Sidebar.Pusher>
              <Route exact to="/" component={Home}/>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Container>
      </Router>
    );
  }
}

export default App;
