import { useState } from 'react'
import '../styles/Collapse.css'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
    const { title, description } = props
    console.log("equip", description)
    
    return isOpen ? (                    
        <div className='collapse-cont'>            
            <div className='collapse-closed'>
                <h2 className='collapse-text'>{title}</h2>  
                <button className='collapse-arrow' onClick={() => setIsOpen(false)}><SlArrowDown /></button>
            </div>            
        </div>
    ) : (
        <div className='collapse-cont'>
            <div className='collapse-closed'>   
                <h2 className='collapse-text'>{title}</h2> 
                <button className='collapse-arrow' onClick={() => setIsOpen(true)}><SlArrowUp /></button>
            </div>
            <div className='collapse-open'>
               <p className='collapse-open-text'>{description}</p>
            </div>
        </div>
    )     
}

export default Collapse

