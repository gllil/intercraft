import React, { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function GMaps() {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyA8k8Ge8UU6-HEQlDJ9SIshPc1FT7mzZ0M">
      <GoogleMap
        mapContainerStyle={{
          width: "flex",
          height: "350px",
        }}
        center={{
          lat: 28.402723,
          lng: -81.403092,
        }}
        zoom={15}
      >
        <Marker
          onLoad={onLoad}
          position={{
            lat: 28.402723,
            lng: -81.403092,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(GMaps);
