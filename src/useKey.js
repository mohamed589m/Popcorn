import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log("Close movie details");
        }
      }

      document.addEventListener("keydown", callback);

      //To cleanup the eventlistener
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
