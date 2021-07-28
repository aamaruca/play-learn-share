import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneCategory } from "../../services/categories";
import { addToCategories } from "../../services/posts";
import "./Create.css"

export default function Create({ handleCreate, categoryList }) {
  const { categoryData, setCateoryData } = useState();
  const { selectedCategory, setSelectedCategory } = useState();
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
    const fetchCategory = async () => {
      const categoryData = await getOneCategory(id);
      setCateoryData(categoryData);
    };
    fetchCategory();
  }, [id, setCateoryData]);

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
        handleCreate(formData);
      }}
    >
      <h3 className="title">Create New Post</h3>
      <div className="create-btns">
      <Link to="/">
        <div className="home">
          <i class="fas fa-home"></i>
        </div>
      </Link>
      <button className="add-btn"><i class="fas fa-plus-square"></i></button>
      </div>
      <label >
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
        <select
          className="inputs" 
          name="category_id"
          onChange={handleChange}
          defaultValue="default"
        >
          <option   disabled value="default">
            - Select a Category -
          </option>
          {categoryList?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      
    </form>
  );
}
