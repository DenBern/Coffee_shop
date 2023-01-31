import { NavigationList } from "../NavigationList/NavigationList"

export const Footer = (navigation) => {
  // const elements = navigation.map(item => { 
  //   const {id, ...itemProps } = item;
  //   if (item.best) {
  //     return <NavigationList key={id} {...itemProps} />  
  //   }
  // })
  return (
    <div className="footer_wrapper">
      <NavigationList />
    </div>
  )
}