import React from 'react'

const Main = ({recipes}) => {
  return (
    <div className='hero'>
        {
            recipes.map((recipe) => {
                return (
                    <div className='col col-lg-3 col-md-6 col-sm-2'>
                        <div className="card" style={{margin: 20}}>
                            <img src={recipe.image} alt={recipe.title} className='card-image-top' style={{margin: 20}}/>
                            <div className="card-header"><h6 style={{color: "black", fontSize: "16px"}}>{recipe.title}</h6></div>
                            <div className="card-body" style={{padding: 15}}>
                                <button className='btn btn-success'>View</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Main