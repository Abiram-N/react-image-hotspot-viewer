# React Image Hotspot Viewer - Material UI v5
### _View  hotspots over an image with tooltip_

A React component to view add and manage hotspots over an image with tooltip. The component is built using [Material UI v5](https://material-ui.com/) and [React](https://reactjs.org/). Supports both desktop and mobile devices.

## Demo

This package supports both desktop and mobile devices. It behaves differently in both the devices.

##### Desktop View

In Desktop view, the hotspot is displayed on hover of the image. Clicking on the hotspot opens the tooltip.

![productionimage](https://user-images.githubusercontent.com/42763936/221795862-bcce228e-dd9b-410b-987b-dc3c6082fc4b.gif)

###### Managing Hotspots

The component supports adding, editing and deleting hotspots. The hotspots can be managed by `onClickEvent` prop. The prop is called whenever an event is triggered. More details on the prop can be found [here](#Managing-Events).

![EditableHotspots](https://user-images.githubusercontent.com/42763936/221799523-2238328a-dd1b-40e9-9ed8-8ed11f883909.gif)


##### Mobile View

In Mobile view, the hotspot is displayed as a pin on the image. Clicking on the hotspot opens the tooltip. The tooltip can be closed by clicking elsewhere on the image.

<img width="300" src="https://user-images.githubusercontent.com/42763936/221824693-ca247f64-d280-4111-8a1a-24bf6765c400.gif">


## Installation

React Image Hotspot Viewer requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
npm i react-image-hotspot-viewer@latest
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

## Basic Example

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
| onClickEvent | function |  | Function called whenever an event is triggered | No |

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


## Advanced Implementation

Example code for advanced implementation is available here: 

### Managing Events

The component supports two events. The events are triggered when the hotspot is clicked and when a new spot is clicked.

```sh
 <ImageHotspotViewer
    image={image}
    hotspots={hotspots}
    imageStyles={{
        borderRadius: '10px',
    }}
    onEventChange={onEventChange}
/>
```

#### onEventChange Function

onEventChange function is called whenever an event is triggered. The function takes three parameters.

- event: The event that is triggered. The event can be `click`.
- subEvent: The sub event that is triggered. The sub event can be `add-hotspot` or `edit-hotspot`
- data: The data associated with the event. The data is an object with the properties based on the event and sub event.
-- `add-hotspot`: The event is triggered when user clicks on the component. Sample data for this event is provided below.
    {
        "top": 78.06841046277665,   `// Top position of the hotspot in percentage`
        "left": 51.64383561643836,  `// Left position of the hotspot in percentage `
        "offsetX": 377,             `// Offset X position of the hotspot`
        "offsetY": 388              `// Offset Y position of the hotspot`
    }
-- `edit-hotspot`: The event is triggered when user clicks on the hotspot.
    {
       "offsetX": 377,             `// Offset X position of the hotspot`
       "offsetY": 388              `// Offset Y position of the hotspot`
       {...restProps}                        `// All the properties of the hotspot`
    }


```sh
const onEventChange = (event, subEvent, data) => {
    switch (event) {
        case 'click':
            switch (subEvent) {
                case 'add-hotspot':
                    //Implement your logic to add hotspot here 
                    break;
                case 'edit-hotspot':
                    //Implement your logic to edit hotspot here
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}
```


## Upcoming Features

Below are the features that are planned to be added in the near future.

- [x] Add support for adding hotspot from UI
- [ ] Add support for custom tootip style
- [ ] Add support for custom pin styles





## License

MIT

**Free Software, Hell Yeah!**
