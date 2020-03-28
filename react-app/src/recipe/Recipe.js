import React from 'react';
import './Recipe.css';

const heartIconSrc = {
  emptyHeart: 'https://cdn1.iconfinder.com/data/icons/ui-22/24/496-512.png',
  fullHeart: 'https://cdn1.iconfinder.com/data/icons/party-flat-2/512/birthday_party_happy_red__heart_-512.png'
}

export class Receipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLiked: false };

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked
    }));
  }

  getImageName = () => this.state.isLiked ? 'fullHeart' : 'emptyHeart'

  render() {
    const imageName = this.getImageName();

    return <div className="receipe-tile" >
      <img src={this.props.photoSrc} />
      <p>{this.props.name} {this.props.isLiked}</p>


      <div className="icon-wrapper" onClick={this.toggleLike}>
        <img className="icon-class"
          src={heartIconSrc[imageName]} />
      </div>
    </div>;
  }
}
