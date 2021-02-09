import * as React from "react";
import '../css/main.css';

const SearchBar: React.FC = ({}) => (
            <div className="searchbar">
                <img className="searchicon" src= "https://w7.pngwing.com/pngs/242/281/png-transparent-computer-icons-magnifier-symbol-magnifying-glass-magnifying-miscellaneous-logo-zooming-user-interface.png" width="5%" height="45%"/>
                <p className="searchtxt">검색</p>
            </div>
);


export default SearchBar;