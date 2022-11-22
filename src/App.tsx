import React, { useEffect, useState } from 'react';
const contentful = require('contentful')

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
      console.log(response.items);
      setContentfulData(response.items[0].fields);
      setIsLoading(false);
    })
    .catch(console.error)
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <h1>hello world {contentfulData.title}</h1>
      )}
    </div>
  );
}

export default App;
