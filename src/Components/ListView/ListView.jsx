import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import "./ListView.css"

const ListView = ({products}) => {
  return (
    <>
     <div className="section">
      <div className="container-list grid">
        {products.map((curElem,i) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column" key={i}>
              <figure>
                <img src={image} alt={name} className='list-img'/>
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button className="btn1 button">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
    </>
  )
}

export default ListView