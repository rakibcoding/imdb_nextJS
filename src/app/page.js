import Results from "@/components/Results";

const API = 'cfb78e473c17900250f5d9823bf24b86'


export default async function Home({ searchParams }) {
  // const genre = searchParams.genre || 'fetchTrending'
  const genre = searchParams.genre || "fetchTrending";
  // const res = await fetch(`https://api.themoviedb.org/3/${genre==='fetchTopRated'? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}$language=en-US$page=1`, { next: { revalidate: 10000 } })
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()
  const results = data.results
  // console.log(results);
  return (
    <div>
      {/* <h4 className='text-green-600'>IMDB</h4> */}
      <Results results={results} />
    </div>
  )
}
