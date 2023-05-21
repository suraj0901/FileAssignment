const Category = ({ data }) => {
  const { Name, Labels } = data;

  const labelsContent = Labels.map((label) => (
    <div className="category_label_row" key={label.id}>
      <input type="checkbox" style={{ marginRight: "4px" }} />
      <span className="category_label">{label.Name}</span>
    </div>
  ));

  return (
    <div className="category_container">
      <h3 className="category_title">{Name}</h3>
      <div className="category_label_container">{labelsContent}</div>
    </div>
  );
};
export default Category;
