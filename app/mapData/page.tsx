"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import mapboxgl, { LngLatLike } from "mapbox-gl";

type DataItem = {
  location: {
    lat: number;
    lng: number;
  };
  address: {
    streetName: string;
    streetNo: string;
    city: string;
  };
  name: string;
};

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  // Add other configuration options here
});

const MapComponent = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [data, setData] = useState<DataItem[]>([]);

  // Initialize the Mapbox map
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
    const newMap = new mapboxgl.Map({
      container: "map", // Replace 'map' with the ID of your map container
      style: "mapbox://styles/mapbox/streets-v11", // Choose your map style
      center: [0, 0], // Initial map center coordinates
      zoom: 1, // Initial zoom level
    });

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
    console.log("this is address", address);
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("THIS IS DATA", data);
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
    const documentType = "form"; // Replace with your document type

    client
      .fetch<DataItem[]>(`*[_type == "${documentType}"]`)
      .then((fetchedData) => {
        // Handle the fetched data
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Add markers to the map using fetched data
  useEffect(() => {
    if (map) {
      data.forEach(async (item) => {
        console.log("THIS IS ITEM", item);
        // Assuming your document has an "address" field
        if (item.address) {
          const location = await geocodeAddress(
            `${item.address.streetName} ${item.address.streetNo}, ${item.address.city}, Sweden`
          );

          if (location) {
            new mapboxgl.Marker().setLngLat(location).addTo(map);
          }
        }
      });
    }
  }, [map, data]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;
