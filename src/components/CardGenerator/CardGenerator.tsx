import { useState, useEffect } from 'react'
import Papa from "papaparse"
import Stack from '@components/Stack/Stack';
import type { CardPayload } from '@components/Card/Card';
import Card from '@components/Card/Card';

function CardGenerator() {
  const [objects, setObjects] = useState<CardPayload[]>([]);
  async function fetchCSV() {
    const response = await fetch('src/assets/Portfolio_Data.csv');
    const reader = response.body?.getReader();
    const result = await reader?.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result?.value);
    const results: Papa.ParseResult<CardPayload> = Papa.parse(csv, { header: true });
    setObjects(results.data);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCSV();
  }, []);

  return <Stack fullPage={true}>
    {objects.map((object: CardPayload, index: number) => {
      const { title, description, year, image, url, url2 } = object;
      return <Card key={index} title={title}
        year={year}
        image={image}
        url={url} url2={url2}
        description={description} />
    })}
  </Stack>
}

export default CardGenerator;