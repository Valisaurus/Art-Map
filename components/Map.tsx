"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const AccessToken: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
mapboxgl.accessToken = AccessToken;

// Define your Map component
const Map = () => {
  useEffect(() => {
    // Create a new map instance`
    const map = new mapboxgl.Map({
      container: "map-container", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(navigationControl, "bottom-right");

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    map.addControl(geolocateControl, "top-left");

    // Add a map load event
    map.on("load", () => {});

    // Cleanup function to remove the map
    // return () => {
    //   map.remove();
    // };
  }, []);

  return (
    <div
      id="map-container"
      className="mapboxgl-map map-container"
      style={{ width: "50%", height: "400px" }}
    ></div>
  );
};

export default Map;
