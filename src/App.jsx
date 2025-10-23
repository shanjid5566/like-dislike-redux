import "./App.css";
import LikeDislikeApp from "./LikeDislikeApp";

function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col p-4 border">
        <h1>Like Dislike App</h1>
        <LikeDislikeApp />
      </div>
    </div>
  );
}

export default App;
