import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'mesTrocs',
    path: '/mestrocs',
    icon: <IoIcons.IoMdPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'mesMessages',
    path: '/mesmessages',
    icon: <AiIcons.AiFillMessage />,
    cName: 'nav-text'
  },
  {
    title: 'mesFavoris',
    path: '/mesfavoris',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text'
  },
  {
    title: 'Calendrier',
    path: '/calendrier',
    icon: <AiIcons.AiOutlineCalendar />,
    cName: 'nav-text'
  },

 
  

];

export default SidebarData;