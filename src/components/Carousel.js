import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {Menu} from "./Menu";

class Carousel extends Component {
  state = {
    activeItemIndex: 1,
    page: 'Inicio'
  }

  changeMenuMarkerHandler = (page) => this.setState({ page });
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const { title, children } = this.props;

    return (
      <div className="carousel-container">
        <div className="carousel-title">
          {title}
        </div>
        <div className="carousel-content">
          <ItemsCarousel
            //
            page={this.state.page}
            changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)}
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={<div style={{ height: 250, background: '#202020' }}></div>}

            // Carousel configurations
            numberOfCards={7}
            gutter={12}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={false}

            // Active item configurations
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={this.state.activeItemIndex}
            activePosition={'center'}

            chevronWidth={24}
            rightChevron={<i className="fa fa-angle-right fa-5x" aria-hidden="true" style={{ color: '#fff'}}></i>}
            leftChevron={<i className="fa fa-angle-left fa-5x" aria-hidden="true" style={{ color: '#fff'}}></i>}
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
        </div>
      </div>
    );
  }
}

export { Carousel };
