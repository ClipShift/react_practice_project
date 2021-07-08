import React, { useState} from "react";
import "./location.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Location() {
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  function showError(error) {
    // eslint-disable-next-line default-case
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  const setPosition = (pos) => {
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };

  return (
    <div className="locContainer">
      <h1 className="loc">Location</h1>
      <p className="fetchLoc" onClick={fetchLocation}>
        <span>Get Location</span>
      </p>
      <p className="lat">Latitude: {lat}</p>
      <p className="long">Longitude: {long}</p>
      <div className="mapContainer">
        <MapContainer
          center={[28.6304, 77.2177]}
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, long]}>
            <Popup>E-Bin No: 1</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
