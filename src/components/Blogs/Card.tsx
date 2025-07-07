import Link from "next/link";
import { FaStar } from "react-icons/fa";

type CarBlogCardProps = {
  title: string;
  description: string;
  author: string;
  ratings: number;
  date: string;
  thumbnail: string;
  tag: string;
  id: number;
};

export default function Card({
  title,
  description,
  author,
  ratings,
  date,
  thumbnail,
  tag,
  id,
}: CarBlogCardProps) {
  return (
    <div className="flex flex-col md:flex-row  rounded-2xl shadow-md overflow-hidden  hover:shadow-2xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative w-full md:w-100 h-56 md:h-70 flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-xs px-3 py-1 rounded-full text-white font-semibold shadow">
          {tag}
        </span>
      </div>
      {/* Content Section */}
      <div className="flex-1 flex flex-col  px-6 py-5">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 text-sm md:text-base line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
            <span className="font-semibold text-slate-700">{author}</span>
            <span>·</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-slate-800 font-semibold text-sm">{ratings.toFixed(1)}</span>
          </div>
        </div>
        <Link
          href={`/details/${id}`}
          className="mt-4 inline-block bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-red-900 transition-all duration-200 text-base w-40"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
