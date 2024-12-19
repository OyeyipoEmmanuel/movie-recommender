import React from "react";
import GenreWrapperUI from "../../components/GenreWrapperUI";
import { useDispatch } from "react-redux";
import { fetchMovie, setGenre } from "../../store/fetchMovieSlicer";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const dispatch = useDispatch();
  const genreSelectHandler = (genreId, genreName) => {
    dispatch(setGenre({ id: genreId, value: genreName }));
    dispatch(fetchMovie(genreId));
    console.log(genreName);
  };

  return (
    <React.Fragment>

      <Helmet>
        <title>Mr. Recommender - Discover top-rated movies tailored to your mood or genre</title>
        <meta name="description" content="Tired of having to search randomly for a movie? Tired of asking people to recommend a movie for you? Mr. Recommender is here for you. Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching...."/>
        <meta name="keywords" content="movies, recommendation, top-rated movies, 2024 movies, latest movies, Just-released movies, Movies based on my mood"/>
        {/* Og meta tags */}
        <meta property="og:title" content="The Best and user-friendly movie recommender website"/>
        <meta property="og:description" content="Tired of having to search randomly for a movie? Tired of asking people to recommend a movie for you? Mr. Recommender is here for you. Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching...."/>
        <meta property="og:image" content="https://movie-recommender.com.ng/website-preview.png"/>

        {/* Script for structured data(JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mr. Movie Recommender",
            "url": "https://movie-recommender.com.ng",
            "description": "Discover top-rated movies tailored based on how you are feeling or based on a specific genre you feel like watching."
          })}
        </script>

      </Helmet>

      <main className="text-white mt-12 px-3 md:px-12 lg:px-16">
        <Header />

        {/* Feelings start */}

        <section className="mt-12">
          <h1 className="text-2xl">So how are you feeling today?</h1>
          <div className="grid grid-cols-3 gap-6 mt-4 md:grid-cols-3 md:gap-12 md:text-2xl">
            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("35", "Humourous😂")}
              value="😂 Humorous"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("18,10751,10402", "chill🫠")}
              value="🫠 Chill"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("35,14", "Heart-Broken💔")}
              value="💔 Heart-Broken"
            />

            <GenreWrapperUI
              onClickProp={() =>
                genreSelectHandler("28,12,10752", "Energetic💪")
              }
              value="💪 Energetic"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("878,99", "Nerdy🤓")}
              value="🤓 Nerdy"
            />
            <GenreWrapperUI
              onClickProp={() =>
                genreSelectHandler("28,9648", "Thrill-Seeking😉")
              }
              value="😉 Thrill-Seeking"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("27", "Horrified😱")}
              value="😱 Horrified"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("16,10751", "Childish🧒")}
              value="🧒 Childish"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("99,36,878", "Curious🤔")}
              value="🤔 Curious"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("80", "Gritty🤨")}
              value="🤨 Gritty"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("10402", "Feeling-Funky🤪")}
              value="🤪 Feeling Funky"
            />
          </div>
        </section>
        {/* Feeling end */}

        {/* Categories start */}

        <section className="mt-12">
          <h1 className="text-2xl">Or select a movie category...</h1>
          <div className="grid grid-cols-3 gap-6 mt-4 md:grid-cols-3 md:gap-12 md:text-2xl">
            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("28", "Action")}
              value="Action"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("12", "Adventure")}
              value="Adventure"
            />
            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("16", "Animation")}
              value="Animation"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("35", "Comedy")}
              value="Comedy"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("80", "Crime")}
              value="Crime"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("27", "Horror")}
              value="Horror"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("14", "Fantasy")}
              value="Fantasy"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("10749", "Romance")}
              value="Romance"
            />

            <GenreWrapperUI
              onClickProp={() => genreSelectHandler("878", "Science Fiction")}
              value="Science Fiction"
            />
          </div>
        </section>

        {/* Categories end */}

        <Footer />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
