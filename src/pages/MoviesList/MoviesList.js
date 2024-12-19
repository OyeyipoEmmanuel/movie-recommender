import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../store/fetchMovieSlicer";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import MappedMovies from "./MappedMovies";
import HeaderBasedOnGenre from "./HeaderBasedOnGenre";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.fetchMovie);
  const status = useSelector((state) => state.fetchMovie.status);
  const genreId = useSelector((state) => state.fetchMovie.genreId);
  const genreName = useSelector((state) => state.fetchMovie.genreName);
  const copiedText = useSelector((state)=> state.copyText.copied)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (genreId && status === "idle" && !localStorage.getItem("MoviesList")) {
      dispatch(fetchMovie(genreId));
    }
  }, [dispatch, status, genreId]);

  useEffect(() => {
    error &&
      toast.error(
        "An error occured while trying to get your movies, please try again!",
        {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: false,
        }
      );
      copiedText && toast.success(
        "Copied to clipboard!",
        {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: false,
        }
      )
  }, [error, copiedText]);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Discover top-rated {genreName} movies recommended just for you
        </title>

        <meta
          name="description"
          content="Tired of having to search randomly for a movie? Tired of asking people to recommend a movie for you? Mr. Recommender is here for you. Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching...."
        />
        <meta
          name="keywords"
          content={`${genreName}, movies, recommendation, mood, discover, 2024 movies, latest ${genreName} movies`}
        />

        {/* Og meta tags */}
        <meta
          property="og:title"
          content="The Best and user-friendly movie recommender website"
        />
        <meta
          property="og:description"
          content="Tired of having to search randomly for a movie? Tired of asking people to recommend a movie for you? Mr. Recommender is here for you. Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching...."
        />
        <meta
          property="og:image"
          content="https://movie-recommender.com.ng/website-preview.png"
        />

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Best and user-friendly movie recommender website"
        />
        <meta
          name="twitter:description"
          content="Tired of having to search randomly for a movie? Tired of asking people to recommend a movie for you? Mr. Recommender is here for you. Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching...."
        />
        <meta
          name="twitter:image"
          content="https://movie-recommender.com.ng/website-preview.png"
        />
      </Helmet>

      <div className="px-4 mt-12 text-white">
        <ToastContainer />
        {error ? (
          <h1 className="text-2xl text-center">
            Oops! An error occured, Please check your internet connection and
            try again later
          </h1>
        ) : (
          <>
            <h1 className="text-white text-center text-2xl">
              {<HeaderBasedOnGenre />}
            </h1>
            <p className="mb-3 italic text-gray-400 text-center">
              ...Here are a few movies for you...
            </p>
            <p className="text-gray-400 text-center text-sm italic">
              ....You can also copy the movie title through the icon next to the
              title and search for the movie on Netflix, YouTube, or
              whatever....
            </p>
          </>
        )}
        <div className="mx-auto flex items-center justify-center">
          {isLoading && <Loading isLoadingProp={isLoading} />}
        </div>

        {data && data.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MappedMovies />
          </div>
        )}
        {!data && !isLoading && (
          <div className="text-white">No movies available.</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
