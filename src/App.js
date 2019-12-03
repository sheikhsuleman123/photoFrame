import React,{Component} from 'react';
import Title from './Components/Title';
import Photoframe from './Components/PhotoFrame';
import Addphoto from './Components/Addphoto';
import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPhotos : [{
        id: 0,
        description: "Beautiful sea",
        imageLink: "https://picsum.photos/800/600?image=14"
        }, {
        id: 1,
        description: "Coffee cup",
        imageLink: "https://picsum.photos/800/600?image=30"
        }, {
        id: 2,
        description: "Freedom",
        imageLink: "https://picsum.photos/800/600?image=50"
        }, {
        id: 3,
        description: "Farm",
        imageLink: "https://picsum.photos/800/600?image=85"
        }
    ]
    }
    this.removePhoto = this.removePhoto.bind(this);
  }
  removePhoto(photoid) {
    console.log(photoid.description);
    this.setState((state)=> ({
        allPhotos : state.allPhotos.filter((photo) =>photo !== photoid )
    }))
  }
  addPhoto(photosubmitted) {
    this.setState(state => ({
      allPhotos : state.allPhotos.concat([photosubmitted])
    }))
  }
                      // this is the example code of fetch data from another component or database 2 part in last lines fetchdatafromdatabase
  // componentDidMount() {
  //   const data = FetchDatafromDatabase();
  //   this.setState({
  //     allPhotos : data
  //   })
  // }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
             <Title  title={'Photo Frame'}/>
             <Photoframe photoblock={this.state.allPhotos} onRemovePhoto={this.removePhoto} />
        </div>
        )} />
        <Route exact path ="/AddPhoto"  render={({history}) => (
          <Addphoto  onAddPhoto={(addedphoto) => {
              console.log(addedphoto);
              this.addPhoto(addedphoto);
              history.push('/');
          }} />
        ) } /> 
          
      </div>
    );
  }
}

//  function FetchDatafromDatabase() {
//   return [{
//     id: "0",
//     description: "Beautiful sea",
//     imageLink: "https://picsum.photos/800/600?image=14"
//     }, {
//     id: "1",
//     description: "Coffee cup",
//     imageLink: "https://picsum.photos/800/600?image=30"
//     }, {
//     id: "2",
//     description: "Freedom",
//     imageLink: "https://picsum.photos/800/600?image=50"
//     }, {
//     id: "3",
//     description: "Farm",
//     imageLink: "https://picsum.photos/800/600?image=85"
//     }

//   ]
// }
