import { useState } from "react";

export default function TaskForm({ handleAdd }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const title = event.target.name;
    const content = event.target.value;
    setInputs((values) => ({ ...values, [title]: content }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date();
    const title = inputs.title;
    const content = inputs.content;
    const like = 0;

    if(title == null || content == null){
      alert("Title or Content value not empty, retry please !");
    }else {
      handleAdd({ id, title, content, like });
    }

    setInputs("");
  };

  return (
    <div className="container my-2">
      <form action="submit" onSubmit={handleSubmit} className="text-center">
        <div className="mb-3">
          <label className="form-label">
            Enter your title:
            <input
              type="text"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              className="form-control text-center"
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Enter your content:
            <input
              type="text"
              name="content"
              value={inputs.content || ""}
              onChange={handleChange}
              className="form-control pb-5 text-center"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
