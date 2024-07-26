import React from 'react'
import { formatDate } from '../../util'

const Card = ({firstReleaseDate,name,summary,rating}) => {


  return (
    <div className=' w-full h-full'>
        
        <div className='bg-card-bg flex h-full'>

        <div className='bg-black w-44 h-full p-3'>
            
        </div>
        <div className='p-4 w-full'>
        <div className='mb-3'>
            <h1 className='text-text-headings text-lg font-medium'>
                {name}
            </h1>
            <p className='text-text-primary text-sm'>
                Release Date: {formatDate(firstReleaseDate)}
            </p>
        </div>
        <div>
            <p className='text-xs'> {`[Summary] ${summary?.length > 60 ? summary.substring(0,350)+"..." : summary}`} </p>
        </div>
        </div>
            <div className='p-3 items-center justify-center flex '>
                <div className='bg-button-accent rounded-full px-[0.7rem] py-[0.2rem] font-bold text-2xl text-text-primary'>
                    {rating}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
