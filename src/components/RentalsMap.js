import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function RentalsMap({ locations, google, setHighlight }) {
  const [center, setCenter] = useState();

  useEffect(() => {
    let arr = Object.keys(locations);
    let getLat = (key) => locations[key]["lat"];
    let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

    let getLng = (key) => locations[key]["lng"];
    let avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

    setCenter({ lat: avgLat, lng: avgLng });
  }, [locations]);

  return (
    <>
      {center && (
        <Map
          google={google}
          containerStyle={{ width: "50vw", height: "calc(100vh - 135px)" }}
          center={center}
          zoom={13}
          initialCenter={locations[0]}
          disableDefaultUI={true}
        >
          {locations.map((coords, i) => (
            <Marker position={coords} onClick={() => setHighlight(i)} />
          ))}
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCii3SzfOkN1qu1qcZw74JptDocPSrJh-A",
  // apiKey: "",
})(RentalsMap);
