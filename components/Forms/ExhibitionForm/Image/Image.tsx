// import { Controller } from "react-hook-form";
// import type { Control, FieldErrors } from "react-hook-form";
// import type { Exhibition } from "@/types/exhibition";
// import styles from "../ExhibitionForm.module.css";

// interface imageProps {
//   control: Control<Exhibition>;
//   errors: FieldErrors<Exhibition>;
// }

// export default function Image({ control, errors }: imageProps) {
//   const handleUpload = async (selectedFile: File) => {
//     // create FormData object
//     const formData = new FormData();

//     // convert selected file to an array buffer
//     const arrayBuffer = await selectedFile.arrayBuffer();

//     // append array buffer to FormData object with the key "image"
//     formData.append("image", new Blob([arrayBuffer]));

//     try {
//       // send post request to the api route endpoint with the formdata
//       const response = await fetch("/api/imageUpload", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Content-Type": "application/octet-stream",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to upload image: ${response.statusText}`);
//       }

//       // handle response data
//       const data = await response.json();
//       // data here is the response from the server
//       console.log("Image uploaded:", data);
//     } catch (error) {
//       // Handle errors
//       {
//         errors.image && (
//           <p className={styles.errorMessage}>{errors.image.message}</p>
//         );
//       }
//     }
//   };

//   return (
//     <section className={styles.nameSection}>
//       <h2>Utställningsbild</h2>
//       <label hidden>Utställningsbild</label>
//       <Controller
//         name="image"
//         control={control}
//         rules={{ required: "Detta fält måste fyllas i" }}
//         render={({ field }) => (
//           <input
//             type="file"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) {
//                 field.onChange(file);
//                 handleUpload(file);
//               }
//             }}
//           />
//         )}
//       />
//       {errors.image && (
//         <p className={styles.errorMessage}>{errors.image.message}</p>
//       )}
//     </section>
//   );
// }
