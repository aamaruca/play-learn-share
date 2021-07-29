import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./EditPost.css"

export default function EditPost({ postList, categoryList, handleUpdate }) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    activity: "",
    materials: "",
    instructions: "",
    description: "",
    resources: "",
    category_id: "",
    img_url: "",
  });

  const {
    activity,
    materials,
    instructions,
    description,
    resources,
    category_id,
    img_url,
  } = formData;

  useEffect(() => {
    const prefillFormData = () => {
      const onePost = postList.find((post) => post.id === +id);
      setFormData({...onePost})
    };
    if (postList.length) {
      prefillFormData();
    }
    prefillFormData();
  }, [postList, handleUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  

  return (
    <form className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3 className="title">Edit Post</h3>
      <div className="edit-btns">
      <Link to="/">
        <div className="home">
          <i class="fas fa-home"></i>
        </div>
      </Link>
      <button className="editpost-btn"><i class="fas fa-edit"></i></button>
      </div>
      <label>
        <input
          className="inputs"
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
          className="inputs"
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
          className="inputs"
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
          className="inputs"
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
          className="inputs"
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
          className="inputs"
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Image Url"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <select className="inputs" name="category_id" onChange={handleChange} >
          {categoryList?.map((category) => (
            <option
              key={category.id}
              selected={category.id === category_id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <br />
    </form>
  );
}
