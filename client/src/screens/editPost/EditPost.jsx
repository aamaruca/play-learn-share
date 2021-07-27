import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditPost({ postList, categoryList, handleUpdate }) {
  // const { categoryData, setCateoryData } = useState()
  // const { selectedCategory, setSelectedCategory } = useState()
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
      // setFormData({
      //   activity: onePost?.activity,
      //   materials: onePost?.materials,
      //   instructions: onePost?.instructions,
      //   description: onePost?.description,
      //   resources: onePost?.resources,
      //   category_id: onePost?.category_id,
      //   img_url: onePost?.img_url,
      // });
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

console.log(category_id)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Post</h3>
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
          name="img_url"
          value={img_url}
          placeholder="Image Url"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <select name="category_id" onChange={handleChange}>
          {categoryList?.map((category) => (
            <option
              default={category.id === category_id ?? false}
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button>Edit</button>
    </form>
  );
}
