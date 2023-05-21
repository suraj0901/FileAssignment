import useCategory from "../../api/hooks/useCategories";
import "./Categories.css";
import Category from "./Category";

const Categories = () => {
  const { categories, error, isLoading } = useCategory();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const categoryContent = categories.map((category) => (
    <Category key={category.id} data={category} />
  ));

  return (
    <div className="categories_container">
      <h2 className="categories_title">
        Categories
        <span className="categories_title_icon">&#9881; </span>
      </h2>
      {categoryContent}
    </div>
  );
};
export default Categories;
