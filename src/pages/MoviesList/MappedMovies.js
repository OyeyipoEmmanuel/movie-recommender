import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { copyText } from "../../store/copyText";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MappedMovies = () => {
  const { data } = useSelector((state) => state.fetchMovie);
  const dispatch = useDispatch();
  let { message, copied } = useSelector((state) => state.copyText);

  // Copy to clipboard function
  const copyMovieNameHandler = (title) => {
    dispatch(copyText(title));
    console.log(message);
    copied &&
      toast.success(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
  };

  return data.map((movie) => (
    <MovieCard key={movie.id}>
      <div className="w-full">
        <ToastContainer />
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-h-72 rounded-t-xl"
          />
        )}
      </div>
      <div className="px-4">
        <div className="mb-3 flex justify-between text-sm">
          <span className="flex items-center space-x-1 border border-gray-400 rounded-full text-gray-400 w-fit px-2 ">
            <label>Release-Date: </label>
            <h1>{movie.release_date}</h1>
          </span>
          <span className="flex items-center space-x-1 border border-gray-400 rounded-full text-gray-400 w-fit px-2 ">
            <label>Rating: </label>
            <h1>{movie.popularity.toFixed(0)}%</h1>
          </span>
        </div>
        <span className="text-xl">
          <label className="text-gray-400">Title: </label>
          <aside className="flex justify-between items-center">
            <h1 className="text-3xl ">{movie.title}</h1>
            <p
              className="cursor-pointer"
              onClick={() => copyMovieNameHandler(movie.title)}
              title="Copy the movie title"
            >
              📝
            </p>
          </aside>
        </span>
        <p className="mt-3 text-gray-200">{movie.overview}</p>

        <div>
          {movie.trailers.length > 0 ? (
            movie.trailers.map((trailer) => {
              return (
                <button
                  className="bg-red-900 mt-4 px-3 py-1 rounded-md w-full hover:bg-opacity-80 hover:transition-all duration-300"
                  key={trailer.id}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  >
                    {trailer.name}
                  </a>
                </button>
              );
            })
          ) : (
            <p className="mt-4 text-red-500 font-semibold text-2xl text-center">
              No Trailer Available
            </p>
          )}
        </div>
      </div>
    </MovieCard>
  ));
};

export default MappedMovies;
