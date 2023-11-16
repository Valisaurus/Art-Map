import { getExhibition } from "@/sanity/sanity.utils";

type Props = {
  params: { utstallning: string };
};

export default async function Exhibition({ params }: Props) {
  const slug = params.utstallning;

  console.log(params); 
  console.log(slug); 

  if (!slug) {
    return <p>Slug is undefined</p>;
  }

  const exhibition = await getExhibition(slug);

  return (
    <>
      <h1>{exhibition.title}</h1>
    </>
  );
}
