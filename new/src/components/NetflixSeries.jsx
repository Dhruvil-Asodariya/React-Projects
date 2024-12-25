const NetflixSeries = () => {
    const name = "Money Hiest";
    //const ratting = "7.5";
    const discripsion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nostrum unde autem, temporibus non perferendis molestiae voluptatem obcaecati illum sequi in numquam omnis dolorem aliquid voluptatibus labore, esse sit provident?";
    let age = 17; 
  
    // let canValue = "Not Available";
  
    // if(age >= 18) canValue = "Watch Now";
  
    const canValue = () => {
      if(age >= 18) return "Watch Now";
        return "Not Available";
    };
  
    const gender = () => {
      const gender = "male";
      return gender;
    };
    
    // if(age < 18)
    // {
    //   return (
    //     <div className="App">
    //         <div>
    //           <img src="about-01.jpg" alt="about-01.jpg" width="20%"/>
    //         </div>
    //         <h2>Name: {name} </h2>
    //         <h3>Ratting: {5 + 2.5} </h3>
    //         <p>Summery: {discripsion} </p>
    //         <p>Gender: {gender()} </p>
    //         <button>not available</button>
    //       </div>
    //   );    
    // }
    return (
      <div className="App">
          <div>
            <img src="about-01.jpg" alt="about-01.jpg" width="20%"/>
          </div>
          <h2>Name: {name} </h2>
          <h3>Ratting: {5 + 2.5} </h3>
          <p>Summery: {discripsion} </p>
          <p>Gender: {gender()} </p>
          {/* <button> {age >= 18 ? "Watch Now" : "Not Available"} </button> */}
          {/* <button> {canValue} </button> */}
          <button> {canValue()} </button>
        </div>
    );
  };

  export default NetflixSeries;