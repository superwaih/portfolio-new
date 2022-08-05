import React from 'react'
import {FiMail} from 'react-icons/fi'
import {BsGithub, BsTwitter,BsLinkedin,BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="p-12 flex flex-col space-y-6 " id="contact">
    <h2 className="text-4xl">CONNECT WITH ME</h2>
    <div className="contact__socials">
        <button className='p-2' ><a href="https://github.com/superwaih"><BsGithub className='hover-bg-cyan-300' size={20}/></a></button>
        <button className='p-2'><a href="https://twitter.com/adewaleszn"><BsTwitter size={20}/></a></button>
        <button className='p-2'><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BIXets8AGSymmVPMt4c1Ahg%3D%3D"><BsLinkedin size={20}/></a></button>
        <button className='p-2'><a href="https://wa.link/sjxjaf"><BsWhatsapp size={20}/></a></button>
        <button className='p-2'><a href="mailto: sheriffhardewale@gmail.com"><FiMail size={20}/></a></button>
    </div>
    <hr className="hr"/>
    <div className="right">
        <p>All rights reserved. (C) 2022</p>
        <p>Designed and developed by <a className='link-dev' href="https://www.linkedin.com/in/walekang/">Adewale Shittu</a></p>
    </div>
</footer>
  )
}

export default Footer