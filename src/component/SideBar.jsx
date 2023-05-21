const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_brand">
        <img
          src="https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg"
          alt=""
          className="avatar"
        />
        <h1 className="sidebar_brand_text">Stealth</h1>
      </div>
      <div className="sidebar_nav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkCNoByFrxHAltYTkGo-LQD1JUgYzeS-PSgNOe5tdqTlhwwXW"
          alt=""
          className="sidebar_nav_img"
        />
        <span className="">File Manger</span>
      </div>
    </div>
  );
};
export default SideBar;
