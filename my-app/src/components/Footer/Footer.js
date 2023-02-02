import './Footer.css'
export const Footer = ({img}) => {
  return (
    <div className="footer_wrapper">
      <div className="navigation">
        <img src={img} alt=""/>
        <nav>
            <ul className="items">
                <li className="item_li">
                  <a href="https://www.google.com/">Coffee house</a>
                </li>
                <li className="item_li">
                  <a href="https://www.google.com/">Our coffee</a>
                </li>
                <li className="item_li">
                  <a href="https://www.google.com/">For your pleasure</a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}