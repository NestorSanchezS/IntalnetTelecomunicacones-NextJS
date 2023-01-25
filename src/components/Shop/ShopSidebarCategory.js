import React from "react";
import Link from "next/link";

const ShopSidebarCategory = () => {
  return (
    <div className="widget">
      <h4 className="sidebar-widget-title">Categorias</h4>
      <ul className="sidebar-cat-list">
        <li>
          <Link href="/shop">
            <a>Banda Ancha</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Repetidores</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Router</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Alta velocidad Wi-Fi</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Satellite TV</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>FTTH</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>ZTE</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopSidebarCategory;
