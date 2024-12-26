export const SeriesCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {id,img_url,name,rating,description,genre,cast,watch_url} = data;
    return (
        <li>
          <div className="App">
            <div>
              <img src={img_url} alt={name} width="40%"/>
            </div>
            <h2>Name: {name} </h2>
            <h3>Ratting: {rating} </h3>
            <p>Summery: {description} </p>
            <p>genre: {genre} </p>
            <p>Cast: {cast} </p>
            <a href={watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
      );
}; 