import { NavigationList } from "../NavigationList/NavigationList"

export const Footer = ({navigation}) => {
  const elements = navigation.map(item => {
    if (item.name === 'black') {
      return item;
    }
    return (
    <NavigationList item={item} />
    )
  })
  return (
    <div className="footer_wrapper">
      {elements}
    </div>
  )
}