import '../styles/Tag.css'
 
function Tag(props) {  
    console.log("props", props.tag)  
    
    return ( 
        <div className='tag'>
            {props.tag.map((tagText) => (
            <p className='tag-name'>{tagText}</p>
            ))}
        </div>
    )
}

export default Tag

