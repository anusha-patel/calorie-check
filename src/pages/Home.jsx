import React from 'react'
import Header from '../components/Header';
import Recipes from '../components/Recipe';

const Home = () => {
  return (
    
    <main className='w-full flex flex-col'>
      <Header title={
        <p>
            Taste the most Delisious Food 
            <br/> with me
        </p>   
      } type='home'/>



      <section id="recipes" className='md:max-w-[80%] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
      </main>

  
  )
}

export default Home