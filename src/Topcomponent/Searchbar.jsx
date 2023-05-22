import React from 'react'


function Searchbar() {
  return (
    <><div className='nav'>
    <div className='Box'>
      <img className='Logo' src="https://thelogofinder.com/wp-content/uploads/edd/2022/03/Meesho.svg "alt="Logo"/>
   <div className='SearchBox'>
   <div className='search'>
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="greyT2" xmlns="http://www.w3.org/2000/svg" iconsize="20" class="sc-bcXHqe gCaeH"><g clip-path="url(#clip0)"><path d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z" fill="#666666"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white" transform="translate(0 0.000244141)"></rect></clipPath></defs></svg>
   </div> 
   <input className='SearchBox' type="text"  placeholder='Try Saree, Kurti or Search by Product Code'/>
   </div>
    <ul className='right'>
      <div className='Link'>
      <div className="Phone">
     <svg viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" width='15' height={20} mr="8" class="sc-pyfCe leNxcK hover" iconsize="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z" fill="#333"></path></svg> 
     </div></div>
     <li><a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pli=1' target="_blank" rel="noreferrer">Download App</a></li>
     <div className='v'></div>
     <li>Become a Supplier</li>
     <div className='v'></div>
     <div className='Profile'>
     <div className='Navicon'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg></div>
<li>Profile</li>
</div>

<div className='Profile'>
     <div className='Navicon'>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></div><li>Cart</li>
     </div>
     </ul>
     
     </div>
     
     </div>    
    </>
  )
}

export default Searchbar