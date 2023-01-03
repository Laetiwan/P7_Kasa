import '../styles/Tag.css'
 
function Tag(props) {  
    return ( 
        <div className='tag'>
            {props.tag.map((tagText, index) => (
            <p key={index} className='tag-name'>{tagText}</p>
            ))}
        </div>
    )
}

export default Tag

