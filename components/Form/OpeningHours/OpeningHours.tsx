import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";
import styles from "../Form.module.css";

interface OpeningHoursProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.monday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.monday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.monday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.monday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.tuesday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.tuesday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.tuesday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.tuesday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.wednesday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.wednesday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.wednesday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.wednesday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.thursday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.thursday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.thursday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.thursday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.friday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.friday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.friday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.friday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.saturday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.saturday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.saturday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.saturday?.to && (
          <p className="text-red-500">
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
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.sunday?.from && (
          <p className="text-red-500">
            {errors.openingHours?.sunday?.from.message}
          </p>
        )}
        <label>Till</label>
        <Controller
          name="openingHours.sunday.to"
          control={control}
          // rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              className=""
              placeholder="00:00"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.openingHours?.sunday?.to && (
          <p className="text-red-500">
            {errors.openingHours?.sunday.to.message}
          </p>
        )}
      </div>
    </section>
  );
}
