import { Divider } from '../Divider/Divider';
import { NavigationList } from '../NavigationList/NavigationList'
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer_wrapper">
      <NavigationList name="footer" />
      <Divider color='black' />
    </div>
      
  )
}