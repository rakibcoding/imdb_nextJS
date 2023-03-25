import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ res }) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${res.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${res.backdrop_path || res.poster_path}`}
                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="image is not available"
                ></Image>
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{res.overview}</p>
                    <h2 className="truncate text-lg font-bold">
                        {res.title || res.name}
                    </h2>
                    <p className="flex items-center">
                        {res.release_date || res.first_air_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" /> {res.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
