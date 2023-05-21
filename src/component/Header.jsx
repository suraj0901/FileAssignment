import PlusIcon from "./UI/Icons/PlusIcon";

const Header = () => {
  return (
    <div className="main_header">
      <h1 className="main_header_title">FIle Manager</h1>
      <button className="reset_button action main_header_button">
        <PlusIcon size={"15px"} className="mr-2" /> Upload
      </button>
    </div>
  );
};
export default Header;
