"use client";

import VenueFormUpdate from "@/components/Forms/VenueFormUpdate/VenueFormUpdate";
import { getVenueData } from "@/sanity/sanity.utils";
import { Venue } from "@/types/venue";

interface ClientSideUpdateVenueProps {
    venue: Venue;
  }
  

const ClientSideUpdateVenue = ({ venue  }: ClientSideUpdateVenueProps) => {
    
    return (   
          <>
            <VenueFormUpdate />
            <div>
              <h1>{venue.venueName}</h1>
              <p>{venue.websiteUrl}</p>
              <p>{venue.about}</p>
              <p>{venue.typeOf}</p>

              <p>{venue.address.streetName}</p>
              <p>{venue.address.streetNo}</p>
              <p>{venue.address.zip}</p>
              <p>{venue.address.city}</p>

              <p>{venue.contact.email}</p>
              <p>{venue.contact.phone}</p>

              <p>{venue.openingHours.monday?.from}</p>
              <p>{venue.openingHours.monday?.to}</p>
              <p>{venue.openingHours.tuesday?.from}</p>
              <p>{venue.openingHours.tuesday?.to}</p>
              <p>{venue.openingHours.tuesday?.from}</p>
              <p>{venue.openingHours.wednesday?.to}</p>
              <p>{venue.openingHours.thursday?.from}</p>
              <p>{venue.openingHours.friday?.to}</p>
              <p>{venue.openingHours.saturday?.from}</p>
              <p>{venue.openingHours.sunday?.to}</p>

              <p>{venue.openingHours.openByAppointment}</p>

              <p>{venue.irregularOpeningHours}</p>

              <p>{venue.about}</p> 
            </div>
          </>
        );

};

export default ClientSideUpdateVenue;