import { fetchFromTMDB } from "../services/tmdb.services.js";
import { User } from "../models/user.model.js";

export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Person not found" });
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });

    res.json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchMovie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function searchTv(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).json({ success: false, message: "Tv not found" });
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });

    res.json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchTv controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getSearchHistory(req, res) {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    console.log("Error in getSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function deleteSearchHistory(req, res) {
  let { id } = req.params;

  id = parseInt(id);

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: {
          id: id,
        },
      },
    });

    res.status(200).json({ success: true, message: "Search history deleted" });
  } catch (error) {
    console.log("Error in deleteSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
