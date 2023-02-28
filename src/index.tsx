import * as React from 'react';

//import ImageHotspotViewerComponent
import { ImageHotspotViewerComponent } from './ImageHotspotViewerComponent';

// Delete me
export const ImageHotspotViewer = ({ image, hotspots, imageStyles }) => {
  return <ImageHotspotViewerComponent
    image={image}
    hotspots={hotspots}
    imageStyles={imageStyles}
  />
};
