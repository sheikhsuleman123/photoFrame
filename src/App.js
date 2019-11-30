import React,{Component} from 'react';
import Title from './Components/Title';
import Photoframe from './Components/PhotoFrame';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPhotos : [{
        id: "0",
        description: "Beautiful sea",
        imageLink: "https://picsum.photos/800/600?image=14"
        }, {
        id: "1",
        description: "Coffee cup",
        imageLink: "https://picsum.photos/800/600?image=30"
        }, {
        id: "2",
        description: "Freedom",
        imageLink: "https://picsum.photos/800/600?image=50"
        }, {
        id: "3",
        description: "Farm",
        imageLink: "https://picsum.photos/800/600?image=85"
        }]
    }
    this.removePhoto = this.removePhoto.bind(this);
  }
  removePhoto(photoid) {
    console.log(photoid.description);
    this.setState((state)=> ({
        allPhotos : state.allPhotos.filter((photo) =>photo !== photoid )
    }))
  }
  render() {
    return (
      <div>
         <Title  title={'Photoframe'}/>
         <Photoframe photoblock={this.state.allPhotos} onRemovePhoto={this.removePhoto} />
      </div>
    )
  }
}

