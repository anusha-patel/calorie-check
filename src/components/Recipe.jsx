import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './Searchbar'
import RecipeCard from './RecipeCard'
import {fetchRecipes } from '../utils'
// import Button from './Button'


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('Vegan')
  const [limit, setLimit] = useState(30)
  const [loading, setLaoding] = useState(false)
  
  const handleChange = (e) => {
    setQuery(e.target.value)
}

const fetchRecipe = async () => {
    try {
        const data2 = await fetchRecipes({query, limit})
        console.log( data2);
        setRecipes(data2);
        setLaoding(false)
    } catch (error) {
        console.log(error)
    } finally {
        setLaoding(false)
    }
}

const handleSearchedRecipe = async (e) =>{
  e.preventDefault();
  fetchRecipe()
}
const showMore = () =>{
  setLimit(prev => prev + 10);
  fetchRecipe();
}


useEffect(() => {
  setLaoding(true)

  fetchRecipe()

}, [])

if (loading) {
  return (
      <Loading />
  )
}
  return(
    <div className='w-full'>
      <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
        <form className='w-full lg:w-3/4' onSubmit={handleSearchedRecipe}>
          <Searchbar placeholder=" eg. cake, 
          chicken,"
          handleInputChange={handleChange}
          rightIcon={ <BiSearchAlt2 className='text-gray-600' />}/>

        </form>
      </div>

      {
        recipes?.length> 0 ?(
          <>
            <div className='w-full flex flex-wrap gap-10  px-0 lg:px-10  py-10 '>
              {
                recipes?.map((item, index) => (
                  <RecipeCard recipe={item} key={index}/>
                ))
              }

            </div>
            <div className='flex w-full items-center justify-center py-10'>
              <button className='bg-green-900 text-white px-5 py-2 rounded-full text-lg capitalize hover:bg-white hover:text-green-900' onClick={showMore}>show more</button>

            </div>
          </>

        ):<div className='text-white w-full items-center justify-center mt-10'>
          <p className='text-center'>No Recipe Found</p>
        </div>
      }

    </div>
  )

}

export default Recipes