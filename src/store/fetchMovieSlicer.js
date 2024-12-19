import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config/config";


export const fetchMovie = createAsyncThunk("fetchMovie", async (genre) => {
  // Fetching with genre
  const response = await fetch(
    `${config.API_URL}?api_key=${config.API_KEY}&with_genres=${genre}`
  );
  const data = await response.json();

  // Fetching with trailers
  const moviesTrailers = await Promise.all(
    data.results.map(async (movie) => {
      const trailerResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${config.API_KEY}`
      );
      const trailerData = await trailerResponse.json();

    //   Return movies with their trailer   

      return {
        ...movie,
        trailers: trailerData.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        ),
      };
    })
  );

//   Store the movies
  localStorage.setItem("MoviesList", JSON.stringify(moviesTrailers));

  return moviesTrailers;
});

const movieSlicer = createSlice({
  name: "fetchMovie",
  initialState: {
    isLoading: false,
    status: "idle",
    genreId: "",
    genreName: "",
    data: JSON.parse(localStorage.getItem("MoviesList")) || [],
    error: false,
  },
  reducers: {
    setGenre: (state, action) => {
      const { id, value } = action.payload;
      state.genreId = id;
      state.genreName = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
      state.status = "loading";
      localStorage.setItem("GenreName", state.genreName)
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchMovie.rejected, (state) => {
      state.status = "failed";
      state.isLoading = false;
      state.error = true;
      
    });
  },
});

export const { setGenre } = movieSlicer.actions;

export default movieSlicer.reducer;
