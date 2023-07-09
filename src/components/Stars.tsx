import Star from './Star'

import type { Stars } from './Stars'

const Stars = ({ count } : Stars) => {
  const stars = [];   
  if (Number.isInteger(count) && count < 6 && count > 0){
    for(let i=0; i < count; i++){
      stars.push( <li key={i}><Star /></li> )
    } 
  }

  return (
    <ul className="card-body-stars u-clearfix">{stars}</ul>
  )
}

export default Stars