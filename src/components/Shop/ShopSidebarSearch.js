import React from "react";
import { useIntalnetContext } from "../../hooks/useIntalnetContext";

const ShopSidebarSearch = () => {
  const { handleChange, search } = useIntalnetContext();
  return (
    <div className="widget">
      <form action="#" className="sidebar-search-form">
        <input
          type="search"
          placeholder="Search"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button>
          <i className="far fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default ShopSidebarSearch;
