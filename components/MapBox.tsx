// "use client";
// import mapboxgl from "mapbox-gl";
// import { useEffect } from "react";

// const AccessToken: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
// mapboxgl.accessToken = AccessToken;

// export default function MapBox() {
//   const initializeMap = () => {
//     const map = new mapboxgl.Map({
//       container: "map-container",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [12.012207669236538, 57.65732635513358], // Initial map center coordinates
//       zoom: 10, // Initial zoom level
//     });

//     // Add map controls, markers, layers, etc.
//     //map.addControl(new mapboxgl.NavigationControl());
//     //map.addControl(new mapboxgl.GeolocateControl());
//     map.addControl(new mapboxgl.NavigationControl());
//   };

//   useEffect(() => {
//     initializeMap();
//   }, []);
//   return (
//     <div
//       className="p-4 m-4"
//       id="map-container"
//       style={{ width: "80%", height: "400px" }}
//     ></div>
//   );
// }
