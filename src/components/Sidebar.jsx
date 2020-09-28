import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ sidebar }) {
  return (
    <div className={`sidebar${sidebar ? '_show' : ''}`}>
      <nav className="menu">
        <Link to={'/calc'} className="menu_item">
          Калькулятор
        </Link>
        <Link to={'/calc'} className="menu_item">
          Продукты
        </Link>
        <Link to={'/calc'} className="menu_item">
          Блюда
        </Link>
        <Link to={'/calc'} className="menu_item">
          Статистика
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
