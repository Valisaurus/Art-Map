"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
const AccessToken: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
mapboxgl.accessToken = AccessToken;

// Define your Map component
const Map = () => {
  useEffect(() => {
    // Create a new map instance
    const map = new mapboxgl.Map({
      container: "map-container", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(navigationControl, "top-left");

    // Add a map load event
    map.on("load", () => {});

    // Cleanup function to remove the map
    // return () => {
    //   map.remove();
    // };
  }, []);

  return (
    <div
      className="p-4 m-4"
      id="map-container"
      style={{ width: "50%", height: "400px" }}
    ></div>
  );
};

export default Map;
