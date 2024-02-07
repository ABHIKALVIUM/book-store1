export const navLinks =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Pages',
        path:'/pages'
    },
    {
        name:'Shope',
        path:'/shope'
    },
    {
        name:'Articles',
        path:'/articles'
    },
    {
        name:'Contact',
        path:'/contact'
    },
  ];

  import { FiUser } from 'react-icons/fi';
  import { VscSearch } from 'react-icons/vsc';
  import { BsBag } from 'react-icons/bs';
  
  export const navRight = {
    managements: [
      {
          id: 1,
          icon: FiUser,  
          link: '*'
      },
      {
          id: 2,
          icon: BsBag,      
          link: '*'
      },
      {
          id: 3,
          icon: VscSearch,      
          link: '*'
      },
    ]
      
  };
  
  import HBook1 from '../assets/HeaderBooks/headerBook1.png'
  import HBook2 from '../assets/HeaderBooks/headerBook2.png'
  import HBook3 from '../assets/HeaderBooks/headerBook3.png'
  
  export const headerBooks =[
      {
          id: 1,
          img: HBook1,
          title:'Life of the wild',
          info: 'This is the journey about a wild animal living with family  it also provides<br> a wholesome family bonding between each member',
          btnLink: '*'
      },
      {
          id: 2,
          img: HBook2,
          title:'Simple way of piece life',
          info: 'It is a book made for those , who want to live life peacefully<br> leaving all the daily stress behind them.',
          btnLink: '*'
      },
      {
          id: 3,
          img: HBook3,
          title:'Great travel at desert',
          info: 'The book "Great travel" at desert takes you on a ride of adventure <br> which you will never forget in your life.',
          btnLink: '*'
      },
  ];
  
  import {  ImFacebook, ImBehance } from 'react-icons/im';
  import {  FiInstagram } from 'react-icons/fi';
  import {  RiTwitterXLine } from 'react-icons/ri';
  import {  GrLinkedinOption } from 'react-icons/gr';

  export const FootersLinksData = {
  
    Aboutus: [
      { linkname: 'Vision ', link: "*", },    
      { linkname: 'Articles ', link: "*", },    
      { linkname: 'Careers ', link: "*", },    
      { linkname: 'Service Terms ', link: "*", },    
      { linkname: 'Donate ', link: "*", },   
     
    ],    
    Discover: [
      { linkname: 'Home ', link: "*", },    
      { linkname: 'Articles ', link: "*", },    
      { linkname: 'Books ', link: "*", },    
      { linkname: 'Authors  ', link: "*", },    
      { linkname: 'Subjects ', link: "*", },   
      { linkname: 'Advanced Search ', link: "*", },   
    ],    
    Myaccount: [
      { linkname: 'Sign In', link: "*", },    
      { linkname: 'Articles ', link: "*", },    
      { linkname: 'View Cart', link: "*", },    
      { linkname: 'My Wishtlist  ', link: "*", },    
      { linkname: 'Track My Order ', link: "*", },      
    ],  
  
    Help: [
      { linkname: 'Help center ', link: "*", },    
      { linkname: 'Report a problem  ', link: "*", },    
      { linkname: 'View Cart', link: "*", },    
      { linkname: 'Suggesting edits ', link: '#' },    
      { linkname: 'Contact us', link: "*", },   
    ],  
  
    socials: [
      { icon: ImFacebook, link: 'https://www.facebook.com' },
      { icon: FiInstagram, link: 'https://www.twitter.com' },
      { icon: GrLinkedinOption, link: 'https://www.instagram.com' },
      { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
      { icon: ImBehance, link: 'https://www.twitter.com' }
    ],    
      
  };