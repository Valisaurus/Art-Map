"use client";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@sanity/client";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types/location";
import "./Map.css";
import { Inter} from "next/font/google";
import VenueName from "../Forms/ApplicationForm/VenueName/VenueName";
import { getExhibitions } from "@/sanity/sanity.utils";
import { Exhibition } from "@/types/exhibition";
import { getColor } from "@/utils/functions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

const MapComponent = ({ getExhibitions }: { getExhibitions: Exhibition[] }) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [clickedExhibition, setClickedExhibition] = useState<string | null>(
    null
  );
  const clickedExhibitionLocationRef = useRef<LngLatLike | null>(null);

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

  // const Exhibition = ({ getExhibitions }: { getExhibitions: Exhibition[] }) => {
  //   useEffect(() => {
  //     getExhibitions.forEach((exhibition) => {
  //       const exhibitionVenueName = exhibition.venue.venueName;
  //       console.log("exibitionName:", exhibitionVenueName);
  //     });
  //     // Log or use the exhibition names as needed
  //   }, [getExhibitions]);

  //   // rest of your component...
  // };


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
              locationData.slug?.current
            )}`;

            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<a href="${link}">${locationData.venueName}</a>`
            );

            // create custom marker element
            const customMarkerElement = document.createElement("div");
            customMarkerElement.className = "marker";
            customMarkerElement.style.backgroundColor = getColor(
              locationData.typeOf
            );

            const marker = new mapboxgl.Marker({ element: customMarkerElement })
              .setLngLat(location)
              .setPopup(popup)
              .addTo(map);

            marker.getElement().addEventListener("click", () => {
              setClickedExhibition(locationData.venueName);
            });

            if (map && clickedExhibitionLocationRef.current) {
              map.flyTo({
                center: clickedExhibitionLocationRef.current,
                zoom: 20,
              });
            }
          }
        }
      });
    }
  }, [map, locations, clickedExhibition]);

  return (
    <>
      <div
        className={inter.className}
        id="map"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default MapComponent;
