import { Toaster } from "react-hot-toast";
import Categories from "./component/Categories/Categories";
import Table from "./component/Files/Table";
import Header from "./component/Header";
import Search from "./component/Search";
import SideBar from "./component/SideBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <section className="root">
      <Toaster position="top-center" />
      <SideBar />
      <main className="flex-1">
        <Header />
        <div className="mian_container">
          <Search onChange={setSearch} />
          <div className="main_body">
            <Categories />
            <Table searchText={search} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
