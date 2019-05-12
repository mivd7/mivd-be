export const getOrder = (itemIndex) => {
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length || 1
  if (itemIndex - position < 0) {
    return numItems - Math.abs(itemIndex - position)
  }
  return itemIndex - position
}

export const nextSlide = (position, children) => {
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length
  this.doSliding('next', position === numItems ? 0 : position + 1)
}

export const previousSlide = (position, children) => {
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
