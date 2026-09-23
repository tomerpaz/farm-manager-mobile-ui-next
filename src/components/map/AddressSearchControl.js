import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const provider = new OpenStreetMapProvider();

// Nominatim search box added as a native Leaflet control (position "topleft",
// same as GeoLocation's LocateControl) — Leaflet stacks same-corner controls
// in the order they're added, so as long as this renders after <GeoLocation />
// it lands right underneath the geo-locate button. style: "button" keeps it
// collapsed to just an icon until it's clicked/focused.
const AddressSearchControl = ({ onLocationSelect }) => {
  const map = useMap();

  useEffect(() => {
    const control = new GeoSearchControl({
      provider,
      position: "topleft",
      style: "button",
      autoClose: true,
      showMarker: false,
      showPopup: false,
      updateMap: false,
    });

    map.addControl(control);

    const handleResult = (event) => onLocationSelect?.(event.location);
    map.on("geosearch/showlocation", handleResult);

    return () => {
      map.off("geosearch/showlocation", handleResult);
      map.removeControl(control);
    };
  }, [map, onLocationSelect]);

  return null;
};

export default AddressSearchControl;
