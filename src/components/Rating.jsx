import '../styles/Rating.css'
//import StarRatings from 'react-star-ratings'
import { MdStarRate } from 'react-icons/md'
//import Rating from 'react-simple-star-rating'

function Rating(props) {
    let stars = ["", "", "", "", ""]
    let greystars = 0
    const rating = props
    console.log("rating", rating)
    const ratingNb = parseInt(rating.rating)
    console.log("ratingNb", ratingNb)
    greystars = 5 - ratingNb
    console.log("greystars", greystars)    
    console.log(stars.fill("true", 0, ratingNb));

    return (
        <div className='container-rating'>
            {stars.map((rate) => (
                (rate==='true') ? <MdStarRate className='star' color='#FF6060' /> : <MdStarRate className='star' color='grey' />
            ))}
        </div>  
    )
}
    
export default Rating


