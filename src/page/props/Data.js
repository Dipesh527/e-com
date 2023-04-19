import React from 'react'
import Display from './Display'

const Data = () => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-8">
    <Display img={"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dipesh"} price={"1000"} product={"samsung"}  />
    <Display img={"https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max"} name={"mobile"} price ={"$10"}  product={"apple"}  />
    <Display img={"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg"} name={"mobile"} price ={"$10"}  product={"apple"}  />
    </div>
    </>
  )
}

export default Data