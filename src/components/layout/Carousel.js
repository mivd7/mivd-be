import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'

class Carousel extends Component {
 state = {
      position: 0,
      direction: 'next',
      sliding: false
    }

  getOrder = (itemIndex) => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('next', position === numItems ? 0 : position + 1)
  }

  previousSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  handleKeyInput = (e) => {
      const { position } = this.state
      const { children } = this.props
      const numItems = children.length
      // arrow up/down button should select next/previous list element
      if (e.keyCode === 39 && position > 0) {
        this.nextSlide()
      } 
      else if (e.keyCode === 37 && position < numItems - 1) {
        this.previousSlide()
      }
  }

  render() {
    const { children } = this.props
    const config = {
      onSwipedLeft: () => this.nextSlide(),
      onSwipedRight: () => this.previousSlide(),
      onKeyDown: () => this.handleKeyInput(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    }

    return (
      <div className="item-gallery">
        <Swipeable {...config}>
          <Wrapper>
            <CarouselContainer sliding={this.state.sliding} direction={this.state.direction}>
              { children.map((child, index) => (
                <CarouselSlot
                  key={ index }
                  order={ this.getOrder(index) }
                >
                  {child}
                </CarouselSlot>
              )) }
            </CarouselContainer>
          </Wrapper>
        </Swipeable>
       </div>
    )
  }
}

export default Carousel;