"use client";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@sanity/client";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types/location";
import "./Map.css";
import { getColor } from "@/utils/functions";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

const MapComponent = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [clickedLocation, setClickedLocation] = useState<string | null>(
    null
  );
  // Initialize the Mapbox map
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/anbru/clnew4y6y03xm01qxft776f2b",
      center: [11.967017, 57.707233], // Initial map center coordinates
      zoom: 12, // Initial zoom level`
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

  // Add markers to the map using fetched data
  useEffect(() => {
    if (map) {
      // Map to associate venueName with markers
      const markerVenueMap = new Map();
      locations.forEach(async (locationData) => {
        if (locationData.address) {
          const location = await geocodeAddress(
            `${locationData.address.streetName} ${locationData.address.streetNo}, ${locationData.address.zip} ,${locationData.address.city}, Sweden`
          );

          // If statement if slug not exists
          if (location) {
            const link = `/platser/${encodeURIComponent(
              locationData.slug?.current
            )}`;

            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<a href="${link}">${locationData.venueName}</a>`
            );

            // Custom marker element
            const customMarkerElement = document.createElement("div");
            customMarkerElement.className = "marker";
            const colors = getColor(locationData.typeOf);
            customMarkerElement.style.backgroundColor = colors.original;

            //Change opacity on hover
            customMarkerElement.addEventListener("mouseover", function () {
              this.style.backgroundColor = colors.hover;
            });
            customMarkerElement.addEventListener("mouseout", function () {
              this.style.backgroundColor = colors.original;
            });

            const marker = new mapboxgl.Marker({ element: customMarkerElement })
              .setLngLat(location)
              .setPopup(popup)
              .addTo(map);

            // Store the marker with the venueName in the Map
            markerVenueMap.set(locationData.venueName, marker);
            
            // Click event to the exhibition cards - changed to click on image
            const exhibitionCards =
              document.querySelectorAll(".exhibitionImage");
            exhibitionCards.forEach((image) => {
              image.addEventListener(
                "click",
                () => {
                  const venueName = image.id;

                  // Retrieve the marker using the venueName from the Map
                  const chosenMarker = markerVenueMap.get(venueName);

                  if (chosenMarker) {
                    const coordinates = chosenMarker.getLngLat();

                    if (venueName !== clickedLocation) {
                      map.flyTo({
                        center: coordinates,
                        zoom: 18,
                      });
                      // Update the state to track the clicked venue
                      setClickedLocation(venueName || null);
                    }
                  }
                }
              );
            });
            // Click event to the exhibition title in the exhibition card - removed until we solve reset of mapview on back-button:
            
            const venueListItems =
              document.querySelectorAll(".venueListItem");
              venueListItems.forEach((item) => {
              item.addEventListener(
                "click",
                () => {
                  const venueName = item.id;
                  // Retrieve the marker using the venueName from the Map
                  const marker = markerVenueMap.get(venueName);

                  if (marker) {
                    const coordinates = marker.getLngLat();
                    // Check if it's a different venue before zooming
                    if (venueName !== clickedLocation) {
                      map.flyTo({
                        center: coordinates,
                        zoom: 15,
                      });
                      // Update the state to track the clicked venue
                      setClickedLocation(venueName || null);
                    }
                  }
                }
              );
            });

            // const exhibitionTitles =
            //   document.querySelectorAll(".exhibitionTitle");
            // exhibitionTitles.forEach((title) => {
            //   title.addEventListener(
            //     "click",
            //     () => {
            //       const venueName = title.parentElement?.id;
            //       // Retrieve the marker using the venueName from the Map
            //       const marker = markerVenueMap.get(venueName);

            //       if (marker) {
            //         const coordinates = marker.getLngLat();
            //         // Check if it's a different venue before zooming
            //         if (venueName !== clickedExhibition) {
            //           map.flyTo({
            //             center: coordinates,
            //             zoom: 15,
            //           });
            //           // Update the state to track the clicked venue
            //           setClickedExhibition(venueName || null);
            //         }
            //       }
            //     }
            //   );
            // });
          }
        }
      });
    }
  }, [map, locations]);

  return (
    <>
      <div id="map" />
    </>
  );
};

export default MapComponent;
