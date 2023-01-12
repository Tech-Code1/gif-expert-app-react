export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/channels/search?api_key=AAzQT0bSmj47qTxB7LmDCM6FNyq2aTAK&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.display_name,
        url: img.featured_gif?.images.downsized_medium.url
    }))

    return gifs;
  }