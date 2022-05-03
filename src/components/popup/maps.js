import { useEffect, useState, useMemo } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useSelector } from 'react-redux';

const Maps = (props) => {
  const {activeItem} = useSelector(state => state);
  const [cmap, setCmap] = useState(null)
  
  useEffect(() => {
    setCmap(MapsWindow(activeItem))
    return  () => (document.getElementById("root")).unmount;
  }, [activeItem])
  
  return (
    
    <YMaps>
      {/* <> */}
      <div id="map" style={{'width': '320px', 'height': '240px'}}>
        {cmap}
      </div>
      {/* </> */}
    </YMaps>
    
  )
}
const MapsWindow = (activeItem) => {
  return (
    <>
      <Map state={{center: [activeItem.coordinates[0], activeItem.coordinates[1]], zoom: 17}}> 
        <Placemark 
          geometry={[activeItem.coordinates[0], activeItem.coordinates[1]]}  
          properties={{
            balloonContent: [activeItem.photos[0]],
            iconContent: [activeItem.address.building]
          }} 
          options={{
            preset: "islands#violetStretchyIcon",
            // Disabling the close balloon button.
            balloonCloseButton: false,
            // The balloon will open and close when the placemark icon is clicked.
            hideIconOnBalloonOpen: false
          }}/>
      </Map>
    </>
  )
}
export default Maps;