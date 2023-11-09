"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types/location";
import "./Map.css";


const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

const MapComponent = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  // Initialize the Mapbox map
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/anbru/clnew4y6y03xm01qxft776f2b",

      center: [11.967017, 57.707233], // Initial map center coordinates
      zoom: 12, // Initial zoom level
    });

    const navigationControl = new mapboxgl.NavigationControl();
    newMap.addControl(navigationControl, "bottom-right");

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    newMap.addControl(geolocateControl, "top-left");

    setMap(newMap);

    return () => {
      // Cleanup resources when the component unmounts
      newMap.remove();
    };
  }, []);

  // Define the geocodeAddress function
  const geocodeAddress = async (
    address: string
  ): Promise<LngLatLike | null> => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          return [lng, lat];
        }
      }

      return null;
    } catch (error) {
      console.error("Error geocoding address:", error);
      return null;
    }
  };

  // Fetch data from Sanity when the component mounts
  useEffect(() => {
    const documentType = "venue";
    client
      .fetch<Location[]>(`*[_type == "${documentType}"]`)
      .then((fetchedLocations) => {
        // Handle the fetched data
        setLocations(fetchedLocations);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  // CHANGE COLOR ON TYPE OF VENUE
  const getMarkerColor = (typeOf: string): string => {
    switch (typeOf) {
      case "gallery":
        return "/images/map/orangeMarker.svg"; 
      case "artistRun":
        return "/images/map/purpleMarker.svg"; 
      case "museum":
        return "/images/map/redMarker.svg"; 
      case "institution":
        return "/images/map/greenMarker.svg"; 
      case "popUp":
        return "/images/map/turquoiseMarker.svg"; 
      default:
        return "/images/map/yellowMarker.svg"; // Default color if typeOf doesn't match any case
    }
  };

  // Add markers to the map using fetched data
  useEffect(() => {
    if (map) {
      locations.forEach(async (locationData) => {
        if (locationData.address) {
          const location = await geocodeAddress(
            `${locationData.address.streetName} ${locationData.address.streetNo}, ${locationData.address.zip} ,${locationData.address.city}, Sweden`
          );

          // if statement if slug not exists
          if (location) {
            const link = `/platser/${encodeURIComponent(
              locationData.slug.current
            )}`;

         
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<a href="${link}">${locationData.venueName}</a>`
            );

            // create custom marker element
            const customMarkerElement = document.createElement("div");
            customMarkerElement.className = "marker"; 
            customMarkerElement.style.backgroundImage = `url(${getMarkerColor(locationData.typeOf)})`
          ;

            const marker = new mapboxgl.Marker({ element: customMarkerElement })
              .setLngLat(location)
              .setPopup(popup)
              .addTo(map);
              
            marker.getElement().addEventListener("click", () => {});
          }
        }
      });
    }
  }, [map, locations]);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default MapComponent;
