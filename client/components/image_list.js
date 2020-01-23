// Create an image list component
// Import React
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400' }
];

// Create component
const ImageList = () => {
  const RenderedImages = IMAGES.map(image => {
    return <ImageDetail key={image.title} image={image} />
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export the component
export default ImageList;
