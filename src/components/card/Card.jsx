import {Link} from "react-router-dom";

const Card = (props) => {
    const isPopular = (props.typeClass === 'popular');
    const img_path = `https://image.tmdb.org/t/p/w500${props.img}`

    return(
        <div className="card">
        {props?.img ?
            <img src={img_path} alt={props.title}/> :
            <span>maaf ga ada gambar</span>
        }
            <div className={`card-description ${ isPopular ? 'popular': 'top-rated'}`}>
                <h3 className="movie-title">{props.title}</h3>
                <Link
                to={`/${props.media}/${props.movieId}-${props.title.split(' ').join('-')}`}
                >
                  details
                </Link>
            </div>
        </div>
    )
}

export default Card