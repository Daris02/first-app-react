import { useState } from "react";

export function Task({ id, title, content, like }) {
  const [likes, setLikes] = useState(like);

  const iLike = (event) => {
    event.preventDefault();
    setLikes(likes + 1);
  };

  return (
    <div key={id} className="card border-primary p-1">
      <h2 className="card-header text-primary p-1">{title}</h2>
      <p className="mb-5">{content}</p>
      <button
        className="btn btn-primary w-25 position-absolute bottom-0 start-0 m-2"
        onClick={iLike}
      >
        {likes} 👍
      </button>
    </div>
  );
}