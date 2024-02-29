import React from 'react';
import classes from './FotoBox.module.css';
import PhotoAlbum from 'react-photo-album';

const photos = [
  {
    src: 'src/app/assets/Pictures/Gallery/1.JPG',
    width: 1.2,
    height: 1,
  },
  {
    src: 'src/app/assets/Pictures/Gallery/6.JPG',
    width: 1.4,
    height: 1,
  },
  {
    src: 'src/app/assets/Pictures/Gallery/3.JPG',
    width: 1.2,
    height: 1,
  },

  {
    src: 'src/app/assets/Pictures/Gallery/4.JPG',
    width: 1.2,
    height: 1,
  },

  {
    src: 'src/app/assets/Pictures/Gallery/5.JPG',
    width: 1,
    height: 1,
  },
  {
    src: 'src/app/assets/Pictures/Gallery/2.JPG',
    width: 1.4,
    height: 1,
  },
];

function FotoBox(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Eindrücke vom Letzen Jahr</h1>
      <div className={classes.gallery}>
        <PhotoAlbum layout="columns" photos={photos} />
      </div>
    </div>
  );
}

export default FotoBox;
