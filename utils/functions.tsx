import { Venue } from "@/types/venue";

export const getTitleFromTypeOf = (typeOfValue: string) => {
  const typeOfOptions = [
    { title: "Gallery", value: "gallery" },
    { title: "Artist Run", value: "artistRun" },
    { title: "Museum", value: "museum" },
    { title: "Institution", value: "institution" },
    { title: "Pop Up", value: "popUp" },
  ];

  const matchingOption = typeOfOptions.find((option) => option.value === typeOfValue);

  return matchingOption ? matchingOption.title : typeOfValue;
};