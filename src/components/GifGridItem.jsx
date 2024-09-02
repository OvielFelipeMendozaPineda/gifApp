export const GifGridItem = ({ id, title, url }) => {
  return (
    <div
      id={id}
      className="w-80 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-48">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white p-3">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};
