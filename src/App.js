import React,{Component} from 'react';
import Title from './Components/Title';
import Photoframe from './Components/PhotoFrame';
import Addphoto from './Components/Addphoto';
import {Route} from 'react-router-dom';

export default class App extends Component {
  
render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
             <Title  title={'Photo Frame'}/>
             {/* <Photoframe photoblock={this.state.allPhotos} onRemovePhoto={this.removePhoto} /> */}
        </div>
        )} />

        {/* <Route exact path ="/AddPhoto"  render={({history}) => (
          <Addphoto  onAddPhoto={(addedphoto) => {
              console.log(addedphoto);
              this.addPhoto(addedphoto);
              history.push('/');
          }} />
        ) } />  */}
          
      </div>
    );
        }
      }