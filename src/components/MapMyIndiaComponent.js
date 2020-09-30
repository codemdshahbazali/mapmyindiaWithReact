import React from 'react';
// import './styles.css';
import Map from 'mapmyindia-react';

export default function MapMyIndia() {
  return (
    <Map
      markers={[
        {
          position: [18.5314, 73.845],
          draggable: true,
          title: 'Marker title',
          onClick: (e) => {
            console.log('clicked ');
          },
          onDragend: (e) => {
            console.log('dragged');
          },
        },
      ]}
    />
  );
}
