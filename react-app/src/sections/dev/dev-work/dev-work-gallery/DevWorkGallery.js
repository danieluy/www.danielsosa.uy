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
          style={{ transform: `scale(${i === this.state.index ? 1.5 : 1})` }}
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

  previousImage(evt) {
    if (evt)
      evt.preventDefault();
    this.setState({
      index: this.state.index > 0 ? this.state.index - 1 : this.state.images.length - 1
    })
  }

  render() {
    return (
      <div className="dev-work-gallery-wrapper">
        <div className="dev-work-gallery-roll">

          {this.getImage(this.state.images[this.state.index])}

          <div className="dev-work-gallery-controls">
            {/*Arrow Back*/}
            <svg onClick={this.previousImage.bind(this)} className="dev-work-gallery-arrow" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>

            <div className="dev-work-gallery-controls-dots">{this.getDots(this.state.images)}</div>

            {/*Arrow Forward*/}
            <svg onClick={this.nextImage.bind(this)} className="dev-work-gallery-arrow" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </div>

        </div>
      </div>
    );
  }
}

export default DevWorkGallery;