import React, { Component } from 'react';
import './DevWorkGallery.css';

class DevWorkGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      index: 0
    }
  }

  // componentDidMount(){
  //   setInterval(() => {
  //     this.nextImage();
  //   }, 5000);
  // }

  getImage(image) {
    return (
      <div className="dev-work-gallery-image-frame">
        <img className="dev-work-gallery-image" src={require(`../../../../assets/img/dev/work/${image.src}`)} alt={image.alt} />
      </div>
    )
  }

  getDots(images) {
    return images.map((img, i) => {
      return (
        <div
          key={i}
          onClick={this.jumpToImage.bind(this, i)}
          className="dev-work-gallery-dot"
          style={{transform: `scale(${i === this.state.index ? 1.5 : 1})`}}
        />
      )
    })
  }

  jumpToImage(index) {
    this.setState({
      index: index
    })
  }

  nextImage(evt) {
    if (evt)
      evt.preventDefault();
    this.setState({
      index: this.state.index < this.state.images.length - 1 ? this.state.index + 1 : 0
    })
  }

  render() {
    return (
      <div className="dev-work-gallery-wrapper">
        <div className="dev-work-gallery-roll">

          {this.getImage(this.state.images[this.state.index])}

          <div className="dev-work-gallery-controls">
            {this.getDots(this.state.images)}
          </div>

        </div>
      </div>
    );
  }
}

export default DevWorkGallery;