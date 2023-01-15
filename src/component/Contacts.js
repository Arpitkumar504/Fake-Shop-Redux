import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contacts = () => {
    return (
        <div className='contacts'>
            <h5>Feel Free to Contact Us</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57317.40720135588!2d85.34505138465121!3d26.12052183673524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e8a3175529%3A0x7c2d919680f759d!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1672305605612!5m2!1sen!2sin" width="100%" height="250" title='maps' style={{ border: 0 }}></iframe>
            <div className="forms">
                <form action="#">
                    <div>
                        <input type="text" name='names' placeholder='Enter Name' className='name' />
                        <FaUserAlt className="icons" />
                    </div>
                    <div>
                        <input type="email" name='emails' placeholder='Enter Email' className='emails' />
                        <MdEmail className="icons" />
                    </div>
                    <div>
                        <textarea name="texts" placeholder='Write Your Query'></textarea>
                    </div>
                    <button type='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts