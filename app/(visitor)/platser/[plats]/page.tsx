import { getVenue } from "@/sanity/sanity.utils";
import styles from "./venue.module.css";
import Link from "next/link";
import ExitButton from "@/components/NavigationButtons/ExitButton/ExitButton";
import Back from "@/components/NavigationButtons/GoBackButton/GoBackButton";
import { getColor } from "@/utils/functions";

type Props = {
  params: { plats: string };
};

// Get the day names in swedish
const dayNameMap: { [key: string]: string } = {
  monday: "Måndag",
  tuesday: "Tisdag",
  wednesday: "Onsdag",
  thursday: "Torsdag",
  friday: "Fredag",
  saturday: "Lördag",
  sunday: "Söndag",
};

// Days of the week in the desired order
const orderedDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default async function Venue({ params }: Props) {
  const slug = params.plats;
  const venue = await getVenue(slug);

  const formattedText = venue.about.replace(/\n/g, "<br>");

  return (
    <>
      <div className={styles.module}>
        <div className={styles.navigation}>
          <Link className={styles.back} href="/platser">
            <Back /> <span>tillbaka till platser</span>
          </Link>
          <Link href="/">
            <ExitButton />
          </Link>
        </div>
        <div
          className={styles.venueWrapper}
          style={{
            backgroundColor: getColor(venue.typeOf).original,
          }}
        >
          <h1 className={styles.heading}>{venue.venueName}</h1>
          <span className={styles.website}>{venue.websiteUrl}</span>
          {/* Om */}
          <p dangerouslySetInnerHTML={{ __html: formattedText }}></p>

          {/* Adress */}
          <section className={styles.adressSection}>
            <p>{venue.address.streetName}</p>
            <p>{venue.address.streetNo}</p>
            <p>{venue.address.zip}</p>
            <p>{venue.address.city}</p>
          </section>

          {/* Kontakt */}
          <section className={styles.contactSection}>
            <p>{venue.contact.email}</p>
            <p>{venue.contact.phone}</p>
          </section>
          {/* Öppettider */}
          <section className={styles.openingHoursSection}>
            {/* mapping through exhibition openingHours to display closed if values are null and to show no days if OpenByAppointment is true */}
            {venue.openingHours.openByAppointment ? (
              <p>Open by appointment only</p>
            ) : (
              orderedDays.map((day) => {
                const hours = venue.openingHours[day as keyof typeof venue.openingHours];

                return (
                  <div key={day} className={styles.openingHours}>
                    <p className={styles.day}>{dayNameMap[day]}</p>
                    {hours &&
                    typeof hours === "object" &&
                    hours.from !== null ? (
                      <>
                        <span>{hours.from}</span> - <span>{hours.to}</span>
                      </>
                    ) : (
                      <span className={styles.closed}> stängt </span>
                    )}
                  </div>
                );
              })
            )}
            <p>{venue.irregularOpeningHours}</p>
          </section>
        </div>
      </div>
    </>
  );
};



