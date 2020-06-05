import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
      console.log("yes i am clicked. Current number of likes:", numLikes);
      set_numLikes(numLikes + 1);
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={() => set_numLikes(initial_numLikes)}>Reset</button>
      </p>
    </div>
  );
}