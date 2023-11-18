

// Function to change typeOf to title instead of default value
export const getTitleFromTypeOf = (typeOf: string) => {
  const typeOfOptions = [
    { title: "Galleri", value: "gallery" },
    { title: "Konstnärsdrivet", value: "artistRun" },
    { title: "Museum", value: "museum" },
    { title: "Konsthall", value: "institution" },
    { title: "Pop Up", value: "popUp" },
  ];

  const matchingOption = typeOfOptions.find(
    (option) => option.value === typeOf
  );

  return matchingOption ? matchingOption.title : typeOf;
};

// Function to determine the color based on typeOf
export const getColor = (typeOf: string): { original: string; hover: string } => {
  switch (typeOf) {
    case "gallery":
      return { original: "rgba(255, 164, 28, 0.5)", hover: "rgba(255, 164, 28, 0.8)"};
    case "artistRun":
      return { original: "rgba(91, 114, 233, 0.5)", hover: "rgba(91, 114, 233, 0.8)" };
    case "museum":
      return { original: "rgba(218, 95, 95, 0.5)", hover: "rgba(218, 95, 95, 0.8)"};
    case "institution":
      return { original: "rgba(106, 157, 139, 0.5)", hover: "rgba(106, 157, 139, 0.8)" };
    case "popUp":
      return { original: "rgba(115, 247, 255, 0.5)", hover: "rgba(115, 247, 255, 0.8)" };
    default:
      return { original: "rgba(255, 214, 0, 0.5)", hover: "rgba(255, 214, 0, 0.8)" };
  }
};

//Function to format date
export const formatDateRange = (
  startDateString: string | number | Date,
  endDateString: string | number | Date
) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  const startDay = startDate.getDate().toString().padStart(2, "0");
  const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
  const startYear = startDate.getFullYear();

  const endDay = endDate.getDate().toString().padStart(2, "0");
  const endMonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
  const endYear = endDate.getFullYear();

  const startFormatted = `${startDay}/${startMonth}`;
  const endFormatted = `${endDay}/${endMonth} ${endYear}`;

  return `${startFormatted} - ${endFormatted}`;
};


