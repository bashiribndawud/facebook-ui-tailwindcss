import React from "react";
import Profile from "../assets/woman.jpg";
import SidebarItems from "./SidebarItems";
import Friends from "../assets/friends.png"
import Recent from "../assets/recent.png"
import Group from "../assets/group.png"
import Market from "../assets/market.png"
import Watch from "../assets/watch.png"
import Clock from "../assets/clock.png"
import Saved from "../assets/saved.png"
import Flag from "../assets/flag.png"
import Event from "../assets/event.png"
import Ad from "../assets/Ad.png"
import Manager from "../assets/graph.png"
import Climate from "../assets/climate.png"
import Game from "../assets/game.png"
import Messenger from "../assets/messenger.png"
import Star from "../assets/star.png"
const Sidebar = ({ Icon, title }) => {
  return (
    <div className="flex flex-col flex-1 overflow-auto py-2 pt-4 space-y-2 overflow-x-hidden">
      <div className="flex flex-row space-x-1 items-center p-1 ml-2 hover:bg-gray-200 hover:cursor-pointer rounded-l-lg">
        {" "}
        <img
          src={Profile}
          alt=""
          className="w-10 h-10 object-cover rounded-full border"
        />{" "}
        <p className="font-semibold text-lg">Bas'shar Ibn Dawud</p>{" "}
      </div>
      <SidebarItems icon={Friends} title="Friends" />
      <SidebarItems icon={Recent} title="Most recent" />
      <SidebarItems icon={Group} title="Groups" />
      <SidebarItems icon={Market} title="Marketplace" />
      <SidebarItems icon={Watch} title="Watch" />
      <SidebarItems icon={Clock} title="Memories" />
      <SidebarItems icon={Saved} title="Saved" />
      <SidebarItems icon={Flag} title="Pages" />
      <SidebarItems icon={Event} title="Events" />
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex flex-row space-x-1 items-center p-2 ml-2 hover:bg-gray-200 hover:cursor-pointer rounded-l-lg w-full mb-2"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <svg
              data-accordion-icon
              class="w-6 h-6 bg-gray-300 rounded-full rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-lg font-semibold">See more</span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <SidebarItems icon={Ad} title="Ad Center" />
          <SidebarItems icon={Manager} title="Ads Manager" />
          <SidebarItems icon={Climate} title="Climate Science Center" />
          <SidebarItems icon={Game} title="Gaming video" />
          <SidebarItems icon={Star} title="Favourite" />
          <SidebarItems icon={Messenger} title="Messenger kids" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
