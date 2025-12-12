import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}

export default function BlogCard({ image, title, desc, link }: BlogCardProps) {
  return (
    <div
      className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3 text-[#001B3A] group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {desc}
        </p>

        <Link
          to={link}
          className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
        >
          Saiba mais →
        </Link>
      </div>
    </div>
  );
}
