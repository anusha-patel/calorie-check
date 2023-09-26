import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = ({ recipe }) => {
    const { image, label, cuisineType, dietLable, mealType, uri } = recipe?.recipe

    const id = uri?.split('#')[1]
    //   recipe_4d536a1270b2220da3ea5d655dd3e8e5
    // console.log(id)
    return (
        <Link to={`/recipes/${id}` } className='w-full md:w-[200px]'>
            <div className='bg_gradient shadow w-full rounded-lg'>
                <img src={image} alt={label} srcset="" className='rounded-lg h-[200px] md:h-[150px] w-full'/>
                <div className='p-2'>
                    <p className='text-white font-semibold'>{label}</p>
                </div>
                <div className='mt-2'>
                    <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500 '>
                        {cuisineType}
                    </span>
                    <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500 '>
                        {mealType}
                    </span>

                </div>

            </div>
        </Link>

    )
}

export default RecipeCard