import Content from './Content.js'
import "./content.css";

import Header from '../header/Header.js';
import Navigation from '../header/Navigation.js';

const TopMain = () => {
  return (
    <div className="topMain">
      <Navigation />
      <Content />
    </div>
  );
};

export default TopMain;
