import { getExhibition } from "@/sanity/sanity.utils";

type Props = {
  params: { ustallning: string };
};

export default async function Exhibition({ params }: Props) {
  const slug = params.ustallning;
  const exhibition = await getExhibition(slug);

  return (
    <>
      <h1>{exhibition.title}</h1>



    </>
  );
}
