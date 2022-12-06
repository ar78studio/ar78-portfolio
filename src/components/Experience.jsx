import React from "react";
import { useState } from "react";
import "../index.css";

const Experience = () => {
  return (
    <>
      <div className='flex items-center m-auto xl:max-w-[1280px] relative my-[6rem]'>
        <ul
          className='nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4'
          id='tabs-tabVertical'
          role='tablist'
        >
          <li className='nav-item flex-grow text-center' role='presentation'>
            <a
              href='#tabs-homeVertical'
              className='
          nav-link
          block
          font-medium
          text-xs leading-normal
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        '
              id='tabs-home-tabVertical'
              data-bs-toggle='pill'
              data-bs-target='#tabs-homeVertical'
              role='tab'
              aria-controls='tabs-homeVertical'
              aria-selected='true'
            >
              UltraIT CRM Agency
            </a>
          </li>
          <li className='nav-item flex-grow text-center' role='presentation'>
            <a
              href='#tabs-profileVertical'
              className='
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        '
              id='tabs-profile-tabVertical'
              data-bs-toggle='pill'
              data-bs-target='#tabs-profileVertical'
              role='tab'
              aria-controls='tabs-profileVertical'
              aria-selected='false'
            >
              Profile
            </a>
          </li>
          <li className='nav-item flex-grow text-center' role='presentation'>
            <a
              href='#tabs-messagesVertical'
              className='
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        '
              id='tabs-messages-tabVertical'
              data-bs-toggle='pill'
              data-bs-target='#tabs-messagesVertical'
              role='tab'
              aria-controls='tabs-messagesVertical'
              aria-selected='false'
            >
              Messages
            </a>
          </li>
        </ul>
        <div className='tab-content' id='tabs-tabContentVertical'>
          <div
            className='tab-pane fade show active'
            id='tabs-homeVertical'
            role='tabpanel'
            aria-labelledby='tabs-home-tabVertical'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            commodi possimus voluptatem soluta! Perspiciatis fuga veniam nobis
            ad aliquam nulla! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos eius alias reiciendis harum rerum assumenda, eum
            laudantium ut ipsum! Autem aut fugit illo ut sapiente cumque
            facilis, necessitatibus impedit quaerat! Voluptatibus maiores,
            reprehenderit rem vitae iusto quibusdam dolor consequatur veritatis.
          </div>
          <div
            className='tab-pane fade'
            id='tabs-profileVertical'
            role='tabpanel'
            aria-labelledby='tabs-profile-tabVertical'
          >
            Tab 2 content vertical
          </div>
          <div
            className='tab-pane fade'
            id='tabs-messagesVertical'
            role='tabpanel'
            aria-labelledby='tabs-profile-tabVertical'
          >
            Tab 3 content vertical
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
