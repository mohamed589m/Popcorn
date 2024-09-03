import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

// import StarRating from "./starRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="green"
//         size={30}
//         onSetRating={setMovieRating}
//       />
//       <p>
//         This movie was rated{" "}
//         {movieRating > 1 ? movieRating + " stars" : movieRating + " star"}{" "}
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5}
    />
    <StarRating
      maxRating={7}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
