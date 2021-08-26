import React from 'react';

const Stars = ({handleRate, rating}) => {
    const star = (m) => {
        const etoile = [];
        for(let i=1; i<=5; i++){
            if(i<=m){
                etoile.push(<span key={i} onClick={()=> handleRate(i)} style={{color:"gold" , fontSize:"20px"}}>★</span>)
            }
            else{
                etoile.push(<span key={i} onClick={()=> handleRate(i)} style={{color:"grey", fontSize:"20px"}}>★</span>)
            }
        }
        return (etoile);
    }

    return (
        <div>
            {star(rating)}
        </div>
    )
}

export default Stars
