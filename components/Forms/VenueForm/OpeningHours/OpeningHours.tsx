import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../VenueForm.module.css";

interface OpeningHoursProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function OpeningHours({ control, errors }: OpeningHoursProps) {
  return (
    <section className={styles.openingHoursSection}>
      <div className={styles.headingWrapper}>
        <h2>Öppettider</h2>
        <small>Om ingen tid anges kommer dagen markeras som stängd.</small>
      </div>
      <div className={styles.day}>
        <h3>Måndag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.monday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.monday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.monday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.monday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.monday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.monday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Tisdag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.tuesday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.tuesday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.tuesday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.tuesday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.tuesday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.tuesday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Onsdag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.wednesday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.wednesday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.wednesday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.wednesday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.wednesday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.wednesday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Torsdag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.thursday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.thursday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.thursday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.thursday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.thursday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.thursday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Fredag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.friday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.friday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.friday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.friday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.friday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.friday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Lördag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.saturday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.saturday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.saturday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.saturday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.saturday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.saturday?.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Söndag</h3>
        <label hidden>Från</label>
        <Controller
          name="openingHours.sunday.from"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.sunday?.from && (
          <p className="errorMessageForm">
            {errors.openingHours?.sunday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.sunday.to"
          control={control}
          render={({ field }) => (
            <input
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.sunday?.to && (
          <p className="errorMessageForm">
            {errors.openingHours?.sunday.to.message}
          </p>
        )}
      </div>
      <div className={styles.day}>
        <h3>Endast förbokade besök</h3>
        <label hidden>Endast förbokade besök</label>
        <Controller
          name="openingHours.openByAppointment"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
              
              checked={field.value || false}
              value={undefined}
            />
          )}
        />
        {errors.openingHours?.openByAppointment && (
          <p className="errorMessageForm">
            {errors.openingHours?.openByAppointment?.message}
          </p>
        )}
      </div>
      <div className={styles.irregularOpeningHours}>
        <h3>Avvikande Öppettider</h3>
        <label hidden> Avvikande öppettider</label>
        <Controller
          name="irregularOpeningHours"
          control={control}
          render={({ field }) => (
            <textarea
              className="irregularOpeningHours"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.irregularOpeningHours && (
          <p className="errorMessageForm">
            {errors.irregularOpeningHours?.message}
          </p>
        )}
      </div>
    </section>
  );
}
