import React from 'react';
import "./ProductCategory.scss";
import { useNavigate } from 'react-router-dom';


const categories = [
    {
        id: 1,
        title: "Gadgets",
        image: "https://i.ibb.co/DwZdFZd/c1.jpg",
    },
    {
        id: 2,
        title: "Womens Fashion",
        image: "https://i.ibb.co/WBzTJnG/c2.jpg",
    },
    {
        id: 3,
        title: "Sport Sneakers",
        image: "https://i.ibb.co/rfJkHXP/c3.jpg",
    },
];

const Category = ({title, image}) => {
    const navigate = useNavigate()
    return (
        <div className="category">
            <h3>{title}</h3>
            <img src={image} alt='cat' />
            <button className="--btn" onClick={() => navigate("/shop")}>
                {"Shop Now>>>"}
            </button>
        </div>
    )
}

const ProductCategory = () => {
  return (
    <div className='categories'>
      {categories.map((cat) => {
        return(
            <div key={cat.id} className='--flex-center'>
                <Category title={cat.title} image={cat.image}/>
            </div>
        )
      })}
    </div>
  )
}

export default ProductCategory
