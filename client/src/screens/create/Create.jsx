import { useState } from "react";
import Category from "../cateogory/Category";

export default function Create({ handleCreate }) {
  const [formData, setFormData] = useState({
    activity: "",
    materials: "",
    instructions: "",
    description: "",
    resources: "",
    category: "",
    img_url: "",
  });

  const {
    activity,
    materials,
    instructions,
    description,
    resources,
    category,
    img_url,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleCreate(formData)
    }}>
      <h3>Create New Post</h3>
      <label>
        <input
          type="text"
          name="activity"
          value={activity}
          placeholder="Activity"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="materials"
          value={materials}
          placeholder="Materials"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="instructions"
          value={instructions}
          placeholder="Instructions"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="resources"
          value={resources}
          placeholder="Resources"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="category"
          value={category}
          placeholder="Category"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Image Url"
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
