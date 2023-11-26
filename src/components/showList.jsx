import { FaList, FaMusic } from "react-icons/fa";
import { useContext } from "react";
import { MusicContext } from "../context/music-context";

const ShowList = () => {
  const mc = useContext(MusicContext);
  return (
    <nav>
      <h3
        style={{
          margin: "auto 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Mani MusicPlayer
        <FaMusic color="red" />
      </h3>
      <button
        onClick={() => mc.setDisplayList(!mc.displayList)}
      >
        <span>Song List </span>
        <FaList />
      </button>
    </nav>
  );
};

export default ShowList;
