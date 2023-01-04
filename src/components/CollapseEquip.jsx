import { useState } from 'react'
import '../styles/Collapse.css'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

function CollapseEquip(props) {
    const [isOpen, setIsOpen] = useState(true)
    const { title, equipments } = props
    
    return isOpen ? (                    
        <div className='collapse-cont'>            
            <div className='collapse-closed'>
                <h2 className='collapse-text-equip'>{title}</h2>  
                <button className='collapse-arrow' onClick={() => setIsOpen(false)}><SlArrowDown /></button>
            </div>            
        </div>
    ) : (
        <div className='collapse-cont'>
            <div className='collapse-closed'>   
                <h2 className='collapse-text-equip'>{title}</h2> 
                <button className='collapse-arrow' onClick={() => setIsOpen(true)}><SlArrowUp /></button>
            </div>
            <div className='collapse-open'>
                {Array.from(equipments).map((equipText, index) => (
                    <p key={index} className='collapse-open-text-equip'>{equipText}</p>
                ))}
            </div>
        </div>
    )     
}

export default CollapseEquip

