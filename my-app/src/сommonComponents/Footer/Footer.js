import { Divider } from '../../сommonComponents/Divider/Divider';
import { NavigationList } from '../NavigationList/NavigationList'
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <NavigationList name="footer" />
        <Divider color='black' />
      </div>
    </footer>
      
  )
}