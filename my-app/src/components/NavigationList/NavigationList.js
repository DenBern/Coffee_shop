import './NavigationList.css';

//NavigationList
import blackBeans from '../../assets/png/coffee_beans_black.png';
import whiteBeans from '../../assets/png/coffee_beans_white.png';

export const NavigationList = ({ usePlace, setActivePage }) => {
  const getBaseClassName = () => {
    if (usePlace  === 'header') {
      return 'navigation header';
    }
    if (usePlace === 'footer') {
      return 'navigation footer';
    }
  }

  const setActivePageId = (pageId) => {
    const activePage = sessionStorage.getItem('activePage');
    if (activePage === pageId) {
      return
    }

    switch(pageId) {
      case 'main':
        sessionStorage.setItem('activePage', 'main');
        setActivePage('main')
        break;
      case 'detailsPage':
        sessionStorage.setItem('activePage', 'detailsPage');
        setActivePage('detailsPage')
        break;
      case 'other':
        sessionStorage.setItem('activePage', 'other');
        setActivePage('other')
        break;
    }
  }

  return (
    <div className={getBaseClassName()}>
        <div className='logo' />
        <nav>
            <ul className="items">
                <li className="item_li">
                  <div onClick={() => setActivePageId('main')}>Coffee house</div>
                </li>
                <li className="item_li">
                  <div onClick={() => setActivePageId('detailsPage')}>Our coffee</div>
                </li>
                <li className="item_li">
                  <div onClick={() => setActivePageId('other')}>For your pleasure</div>
                </li>
            </ul>
        </nav>
      </div>
  )
}