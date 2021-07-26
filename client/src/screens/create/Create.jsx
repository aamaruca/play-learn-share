import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCategory } from "../../services/categories";
import { addToCategories } from "../../services/posts";


export default function Create({ handleCreate, categoryList }) {
  const { categoryData, setCateoryData } = useState(null)
  const { selectedCategory, setSelectedCategory } = useState()
  const { id } = useParams()

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
  
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getOneCategory(id)
      setCateoryData(categoryData)
  }
  fetchCategory()    
  }, )

  // const handleCategoryChange = (e) => {
  //   const { value } = e.target
  //   setSelectedCategory(value)
  // }

//   const handleCategorySubmit = async (e) => {
//     e.preventDefault()
//     const categoryData = await addToCategories(id, selectedCategory)
//     setSelectedCategory(categoryData)
//  }


  
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
      {/* onSubmit={handleCategorySubmit}> */}
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
          name="img_url"
          value={img_url}
          placeholder="Image Url"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <select onChange={handleChange} defaultValue='default'>
          <option disabled value='default'>
            -- Select a Category --
          </option>
          {categoryList?.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
      <br/>
      <button>Add New Post</button>
    </form>
  );
}
