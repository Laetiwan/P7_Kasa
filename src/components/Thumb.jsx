import '../styles/Thumb.css'
import data from '../data/logements.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Thumb() {  
    const [id, setId] = useState();  
	return (
        <div className='gallery'>
            {data.map((logement) => (                
                <div style={{backgroundImage: "url("+logement.cover+")"}} key={logement.id} className='card' onClick={() => setId(id)}>      
                    <Link to={`/Logement/${logement.id}`}>                          
                       <p className='card-text'>{logement.title}</p> 
                    </Link>                    
                </div>
            ))}
        </div>
    )
}

export default Thumb

