import React from 'react';
import Title from './Components/Title';
import Photoframe from './Components/PhotoFrame';

const allPhotos = [{
  id: "0",
  description: "beautiful sea",
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

function App() {
  return (
    <div >
     <Title  title={'Photoframe'}/>
     <Photoframe photoblock={allPhotos} />
    </div>
  );
}

export default App;
