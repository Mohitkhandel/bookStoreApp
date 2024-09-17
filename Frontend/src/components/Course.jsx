import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
     <div className='mt-28 items-center justify-center text-center'>
          <h1 className="text-2xl  md:text-4xl">
            We"re delighted to have you {" "} 
            <spam className="text-pink-500"> Here! :</spam>
        </h1>
        <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipising elit. Porro,assumenda ? 
            Repellendus,iste corrupt? Tempore laudantium repellendus accusamtium sed architecto odio , nisi expedita quas 
            quidem nesciunt debits dolore non aspernatur praesntium assumenda sint quibusdam,perpiciatis, exolicaba sequi 
            fugiat amet animi eos aut. Nabis quisquam reicindis sunt quis sed magnam consequatur !
        </p>
       <Link to="/">
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-700 duration-300'>Back</button>
       </Link>
     </div>
     <div className="mt-12 grid  grid-cols-1 md:grid-cols-4 ">
        { list.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))}
     </div>
    </div>
    </>
  )
}

export default Course
