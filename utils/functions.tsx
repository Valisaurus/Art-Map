"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
export const getColor = (typeOf: string): string => {
  switch (typeOf) {
    case "gallery":
      return "rgba(255, 164, 28, 0.5)";
    case "artistRun":
      return "rgba(91, 114, 233, 0.5)";
    case "museum":
      return "rgba(218, 95, 95, 0.5)";
    case "institution":
      return "rgba(106, 157, 139, 0.5)";
    case "popUp":
      return "rgba(115, 247, 255, 0.5)";
    default:
      return "rgba(255, 214, 0, 0.5)"; // Default color if typeOf doesn't match any case
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

export const getUser = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    return { userId };
  } else {
    return null; // or some default user object
  }
};
