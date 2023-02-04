import { getDivider } from '../../helpers/getDivider';

import  './Divider.css';

export const Divider = (color) => {
  return (
    <div className='divider_wrapper'>
      {getDivider(color)}
    </div>
  )
}

