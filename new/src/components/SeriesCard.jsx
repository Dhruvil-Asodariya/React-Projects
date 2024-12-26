export const SeriesCard = (props) => {
    return (
        <li>
          <div className="App">
            <div>
              <img src={props.curElem.img_url} alt={props.curElem.name} width="20%"/>
            </div>
            <h2>Name: {props.curElem.name} </h2>
            <h3>Ratting: {props.curElem.rating} </h3>
            <p>Summery: {props.curElem.description} </p>
            <p>genre: {props.curElem.genre} </p>
            <p>Cast: {props.curElem.cast} </p>
            <a href={props.curElem.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
      );
};