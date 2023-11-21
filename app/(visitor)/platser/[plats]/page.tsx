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
        <div className={styles.venueWrapper}>
          <h1 className={styles.heading}>{venue.venueName}</h1>
          <Link href={venue.websiteUrl} className={styles.website}>
            {venue.websiteUrl}
          </Link>
          <div className={styles.contentWrapper}>
            <div className={styles.aboutSection}>
              <p dangerouslySetInnerHTML={{ __html: formattedText }}></p>
            </div>

            <div
              className={styles.infoWrapper}
              style={{
                backgroundColor: getColor(venue.typeOf).original,
              }}
            >
              <section className={styles.openingHoursSection}>
                <h2>Öppettider</h2>
                {/* mapping through exhibition openingHours to display closed if values are null and to show no days if OpenByAppointment is true */}
                {venue.openingHours.openByAppointment ? (
                  <p>Endast förbokade besök</p>
                ) : (
                  orderedDays.map((day) => {
                    const hours =
                      venue.openingHours[
                        day as keyof typeof venue.openingHours
                      ];

                    return (
                      <div key={day} className={styles.openingHours}>
                        <span className={styles.day}>{dayNameMap[day]}</span>
                        {hours &&
                        typeof hours === "object" &&
                        hours.from !== null ? (
                          <>
                            <span className={styles.hours}>{hours.from} -
                            {hours.to}</span>
                          </>
                        ) : (
                          <span className={styles.closed}> Stängt </span>
                        )}
                      </div>
                    );
                  })
                )}
                <p>{venue.irregularOpeningHours}</p>
              </section>
              <div className={styles.addressAndContact}>
                <section className={styles.addressSection}>
                  <h2>Adress</h2>
                  <span>
                    {venue.address.streetName} {venue.address.streetNo}
                  </span>
                  <span>{venue.address.zip}</span>
                  <span>{venue.address.city}</span>
                </section>
                <section className={styles.contactSection}>
                  <h2>Kontakt</h2>
                  <span>{venue.contact.email}</span>
                  <span>{venue.contact.phone}</span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
