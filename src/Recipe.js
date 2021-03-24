import react from "react"; 


const Recipe = (title,calories,image) => {
    return(
    <div className='recipe'>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="Picture of food item" />
    </div>
    );
};

export default Recipe;