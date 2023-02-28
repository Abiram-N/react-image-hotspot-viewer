# React Image Hotspot Viewer - Material UI v5
### _View  hotspots over an image with tooltip_

## Installation

React Image Hotspot Viewer requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
npm i lodash react-image-hotspot-viewer@latest
```

## Usage
##### Import Stylesheet

Import the stylesheet and Icons in your project
```sh
  <link href="https://devcdn.extscape.com/css/style.css" rel="stylesheet" />
```

```sh
 <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    rel="stylesheet" />
```

##### Import Component
Import the component in your project

```sh
import { ImageHotspotViewer } from 'react-image-hotspot-viewer'
```

##### Add Component
Add the component in your project

```sh
 <ImageHotspotViewer
      image="https://devcdn.extscape.com/images/SampleRoom.avif"
      hotspots={hotspots}
      imageStyles={{
          borderRadius: '5px',
      }}
  />
```

## Example

```sh
import './App.css';
import { ImageHotspotViewer } from 'react-image-hotspot-viewer'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <ImageHotspotViewer
          image="https://devcdn.extscape.com/images/SampleRoom.avif"
          hotspots={hotspots}
          imageStyles={{
            borderRadius: '5px',
          }}
        />
      </div>
    </div>
  );
}

export default App;
```

## Hotspots

```sh
[{
  id: 1,
  title: 'Sofa',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
  image: "https://devcdn.extscape.com/images/SeatSoftGrey.avif",
  position: {
    top: '80%',
    left: '35%'
  },
  action: {
    hasAction: true,
    type: 'link',
    url: 'https://www.google.com',
    label: 'View Product Details',
    icon: 'open_in_new',
  }
}, {
  id: 2,
  title: 'Lamp',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.',
  position: {
    top: '40%',
    left: '82%'
  },
  action: {
    hasAction: false,
  }
}]
```

## Props

| Prop | Type | Default | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| image | string |  | Image URL | Yes |
| hotspots | array | [] | Array of hotspots | Yes |
| imageStyles | object | {} | Styles for image | No |

## Hotspot Props

| Prop | Type | Default | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| id | string |  | Unique ID for hotspot | Yes |
| title | string |  | Title for hotspot | Yes |
| description | string |  | Description for hotspot | No |
| position | object |  | Position for hotspot | Yes |
| position.top | string |  | Top position for hotspot in percentage | Yes |
| position.left | string |  | Left position for hotspot in percentage | Yes |
| action | object |  | Action for hotspot | No |
| action.hasAction | boolean |  | Has action for hotspot | Yes if action is present |
| action.type | string |  | Type of action for hotspot | Yes if action is present |
| action.url | string |  | URL for hotspot | Yes if action type is URL |
| action.label | string |  | Label for hotspot | No |
| action.icon | string |  | Icon for hotspot | No |# react-image-hotspot-viewer
