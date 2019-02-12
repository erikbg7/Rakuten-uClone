import React, { Component } from 'react';
import { Logo, Menu, Input } from '../components/index';

class NavBar extends Component {
  state = {
    page: 'Inicio'
  }

  changeMenuMarkerHandler = (page) => this.setState({ page });

  render() {
    return (
      <div className="navbar-container">
        <Logo changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)} />
        <Menu
          page={this.state.page}
          changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)}
        />
        <Input
          placeholder="Buscar..."
          onEnterPressed={query => this.props.onSearchMovies(query)}
          onCollapseInputHandler={() => this.props.onCollapseInputHandler()}
          onExpandInputHandler={() => this.props.onExpandInputHandler()}
        />
      </div>
    );
  }
}

export { NavBar };
