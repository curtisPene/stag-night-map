import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:5000");

const locations = {
  manaCoffee: [-18.14266, 178.42756],
  preve: [-18.1399, 178.4311],
  hideNSeek: [-18.13353, 178.42624],
  friends: [-18.1383, 178.4265],
  hillTopTavern: [-18.1433, 178.4244],
  downUnder: [-18.1442, 178.4238],
  oReillys: [-18.1418, 178.4236],
};

const locationNames = [
  "Mana Coffee",
  "Preve",
  "Hide N Seek",
  "Friends Bar",
  "Hilltop Tavern",
  "Down Under",
  "O'Reillys",
];

const rumrunnersHavenMapWithMarkers =
  "https://api.mapbox.com/styles/v1/curtispene/cljyonfxg001g01r58esm3a0i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3VydGlzcGVuZSIsImEiOiJja3ptMmRkbno1NW4xMnBvMGp4Z2huNjNtIn0.gpfTLp8IoGGa-LZSGcfBmQ";
const rumrunnersHavenMapNoMarkers =
  "https://api.mapbox.com/styles/v1/curtispene/cljyo8l9n001e01r5fi6v1y8u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3VydGlzcGVuZSIsImEiOiJja3ptMmRkbno1NW4xMnBvMGp4Z2huNjNtIn0.gpfTLp8IoGGa-LZSGcfBmQ";
function App() {
  const mapRef = useRef();
  const [showMarkers, setShowMarkers] = useState(false);

  const barCoords = Object.values(locations);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    // socket.on("change_location", (data) => {
    //   console.log(data.flyTo);
    //   flyTo(data.flyTo);
    // });
  }, []);

  const flyTo = (location) => {
    if (!showMarkers) {
      setShowMarkers(true);
    }
    const location = e.target.name;

    console.log(locations[location]);
    mapRef.current.flyTo(locations[location], 18, { duration: 1.5 });
  };

  return (
    <>
      <MapContainer
        center={[-17.817, 178.679]}
        zoom={7}
        scrollWheelZoom={true}
        ref={mapRef}
        dragging={false}
      >
        <TileLayer
          url={
            showMarkers
              ? rumrunnersHavenMapWithMarkers
              : rumrunnersHavenMapNoMarkers
          }
        />
      </MapContainer>
      <div id="overlay" style={{ textAlign: "center" }}>
        <div id="controls">
          <button onClick={flyTo} name="manaCoffee">
            Mana
          </button>
          <button onClick={flyTo} name="preve">
            Preve
          </button>
          <button onClick={flyTo} name="hideNSeek">
            Hide N Seek
          </button>
          <button onClick={flyTo} name="friends">
            Friends
          </button>
          <button onClick={flyTo} name="hillTopTavern">
            Hill Top Tavern
          </button>
          <button onClick={flyTo} name="downUnder">
            Down Under
          </button>
          <button onClick={flyTo} name="oReillys">
            O'Reillys
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
