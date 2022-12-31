import { useState } from 'react'
import '../styles/Collapse.css'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

function CollapseEquip(props) {
    const [isOpen, setIsOpen] = useState(false)
    const { title, description } = props
    console.log("equip", description)
    
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
                {Array.from(description).map(equipText => { 
                    return (
                    <p key={description} className='collapse-open-text-equip'>{equipText}</p>
                    );
                })}
            </div>
        </div>
    )     
}

export default CollapseEquip

