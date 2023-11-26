import { FaList, FaMusic } from "react-icons/fa";

const ShowList = ({ displayList, setDisplayList }) => {
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
      <button onClick={() => setDisplayList(!displayList)}>
        <span>Song List </span>
        <FaList />
      </button>
    </nav>
  );
};

export default ShowList;
