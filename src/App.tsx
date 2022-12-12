import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { ShowDates } from './components/show-dates';
import { SongCards } from './components/song-cards';
import { getImageUrl } from './utils';
const contentful = require('contentful');

const client = contentful.createClient({
  space: '6pzomq6z5qlh',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'w01YQyqS94YabnHbzwzVbAS29hYhDyrY9QeVwlcWGnk'
})

function App() {

  const [contentfulData, setContentfulData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    client.getEntries()
      .then((response: any) => {
        console.log(response.items[0].fields);
        setContentfulData(response.items[0].fields);
        setIsLoading(false);
      })
      .catch(console.error)
  }, []);

  const title = contentfulData?.title || 'sanbira band';
  const showsImage = getImageUrl(contentfulData?.showsImage);

  const mainLinks = contentfulData?.mainLinks?.map((ml: any) => ml.fields) || [];
  const showDates = contentfulData?.showDates?.map((sd: any) => sd.fields) || [];
  const songCards = contentfulData?.songCards?.map((sc: any) => (
    { ...sc.fields, songArt: getImageUrl(sc.fields?.songArt) }
  ) || []);

  console.log('<<>>', mainLinks, showDates, songCards);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="app-wrapper">
      <Header title={title} mainLinks={mainLinks} />
      <ShowDates showsImage={showsImage} showDates={showDates} />
      <SongCards songCards={songCards} />
    </div>
  );
}

export default App;
