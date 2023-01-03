import '../styles/Rating.css'
import { MdStarRate } from 'react-icons/md'

function Rating(props) {
    let stars = ["", "", "", "", ""]
    const rating = props
    const ratingNb = parseInt(rating.rating)
    console.log(stars.fill("true", 0, ratingNb));

    return (
        <div className='container-rating'>
            {stars.map((rate, index) => (
                (rate==='true') ? <MdStarRate key={index} className='star' color='#FF6060' /> : <MdStarRate key={index} className='star' color='grey' />
            ))}
        </div>  
    )
}
    
export default Rating


