import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //console.log(isMenuOpen);
  if (!isMenuOpen) return null; //early return
  return (
    <div className="p-5 shadow-lg w-2/12 shrink-0">
      <ul className="border-b-2">
        <li className="p-2 border rounded-full bg-gray-50">
          <Link to='/'>
            <i className="bi bi-house-door-fill pr-2 text-xl"></i>Home
          </Link>
        </li>

        <li className="p-2">
          <i className="bi bi-lightning-charge-fill pr-2 text-xl"></i>Shorts
        </li>
        <li className="p-2">
          <i className="bi bi-collection-play pr-2 text-xl"></i>Subscriptions
        </li>
      </ul>

      <ul className="border-b-2">
        <li className="p-2">
          <i className="bi bi-play-btn pr-2 text-xl"></i>Library
        </li>
        <li className="p-2">
          <i className="bi bi-clock-history pr-2 text-xl"></i>History
        </li>
        <li className="p-2">
          <i className="bi bi-clock pr-2 text-xl"></i>Watch Later
        </li>
        <li className="p-2">
          <i className="bi bi-hand-thumbs-up pr-2 text-xl"></i>Liked videos
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="border-b-2">
        <li className="p-2">
          <i className="bi bi-music-note-beamed text-xl border rounded-full mr-2 bg-purple-700 pr-1"></i>
          Music
        </li>
        <li className="p-2">
          <i className="bi bi-trophy-fill text-xl border rounded-full mr-2 bg-purple-700 px-1"></i>
          Sports
        </li>
        <li className="p-2">
          <i className="bi bi-controller text-xl border rounded-full mr-2 bg-purple-700 px-1"></i>
          Gaming
        </li>
        <li className="p-2">
          <i className="bi bi-film text-xl border rounded-full mr-2 bg-purple-700 px-1"></i>
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
    </div>
  );
};

export default Sidebar;
