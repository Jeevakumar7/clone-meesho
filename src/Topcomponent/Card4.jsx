import React from 'react'
import kid from '../assets/4nqjp_400.webp'


function Card4() {
  return (
    <div className='Shopingcard'>
        <div className='outer'>  
        <div class="card" >
  <img className='dress' src={kid} class="card-img-top"alt="kiddress"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:' rgb(153, 153, 153)'}}> Pyjama Set For Boys</h5>
    <div className='price'>₹243 </div>
    <p class="card-text"></p>
    <div className="review">
    <h5 className='content'><span class="badge bg-secondary" font-size="12px" font-weight="demi" color="greyT1">Free Delivery</span></h5>
    <div className="button">
    <a className='num' href="#" class="badge bg-success" style={{textDecoration:'none'}} >3.8 <span className='star'><svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span></a>
<span className='details'>2714 Ratings, 429 Reviews
</span>
    </div>
    </div>
    </div>
</div>
  </div>
  </div>

  )
}

export default Card4