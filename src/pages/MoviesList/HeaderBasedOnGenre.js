
import { useSelector } from "react-redux";

const HeaderBasedOnGenre = () => {
  const genreName = useSelector((state) => state.fetchMovie.genreName);
  
  // Set header name based on mood seleted
  let headerBasedOnGenre;

  switch (localStorage.getItem('GenreName')) {
    case "Humourous😂":
      headerBasedOnGenre = "Looks like someone's feeling Humourous😂 today!";
      break;
    case "chill🫠":
      headerBasedOnGenre = "Just Chill guy you know🫠";
      break;
    case "Angry😤":
      headerBasedOnGenre = "Yoo, who made you Angry😤";
      break;
    case "Heart-Broken💔":
      headerBasedOnGenre = "Damn, Love can be hurful sometimes 💔";
      break;
    case "Energetic💪":
      headerBasedOnGenre = "Looks like someone's feeling Energetic💪 today!";
      break;
    case "Nerdy🤓":
      headerBasedOnGenre =
        "Nerds are also humans, they just act weirdly and wears glasses🤓";
      break;
    case "Thrill-Seeking😉":
      headerBasedOnGenre = "Ooh thrill seekers are the best am i right😉?";
      break;
    case "Horrified😱":
      headerBasedOnGenre =
        "Why would you want to watch something horrific😱? Anyways...";
      break;
    case "Childish🧒":
      headerBasedOnGenre = "Feeling like a child today??";
      break;
    case "Curious🤔":
      headerBasedOnGenre = "Looks like someone's feeling Curious🤔 today!";
      break;
    case "Gritty🤨":
      headerBasedOnGenre = "Gritty🤨 innit!!!";
      break;
    case "Feeling-Funky🤪":
      headerBasedOnGenre =
        "Looks like someone's feeling Feeling-Funky🤪 today!";
      break;
    default:
      // headerBasedOnGenre = "Hi, I'm Mr. Recommender";
      headerBasedOnGenre = "Hi, I'm Mr. Recommender - " +  genreName;
      break;
  }

  return headerBasedOnGenre;
};

export default HeaderBasedOnGenre;
