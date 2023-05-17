import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Dropdown from './Dropdown';
// import Popup from '../../public/Top_Border.png';

function Memo() {
  const [count,setCount]=useState(10);
  const [data,setdata]=useState(0);


  return (
    <>
        <Dropdown data={count}/>
<div>Memo{data}</div>
<button type='button' onClick={()=>setdata(data+1)}>Memo</button> 
      <section className='sd_film_section'>
        <div className="sd_film_list_inner">
          <div className="sd_inner_container">
            <div className="sd_film_list_wpr">
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Cha Cha Real Smooth </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Emily The Criminal </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Cha Cha Real Smooth </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Cha Cha Real Smooth </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Cha Cha Real Smooth </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
              <div href="" className='sd_event_card'>
                <div className='sd_event_card_img'>
                  <img src="/images/Top_Border.png" alt="" />
                </div>
                <div className='main_ticketData'> 
                <div class="sd_event_card_label"><h4>Feature</h4></div>
                <div class="sd_event_card_desc"><h2>Cha Cha Real Smooth </h2><div class="sd_event_card_desc_content sd_rtf_content"><p></p>
                </div></div>
                <div className='sd_event_card_time'>
                  <div className='date'>
                    <h4>Date</h4>
                    <span>Jan. 19<br/> 7:00 PM MST</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>The Rey <br/>Park City</span>
                  </div>
                  </div>
                  
                </div>
                <div className='Available_ticket'>
                    <h4># of Available Tickets</h4>
                    <h1>4</h1>
                     </div>
                     <div className='schedule_btn'>
                     <div className='ticket_Btn'>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     <span class="my_schedule_btn my_schedule_fill_btn blue  ">Scan Tickets</span>
                     </div>
                     </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id='sprite'></div>
      <div id='sprite1'></div>
    </>
  )
}

export default Memo