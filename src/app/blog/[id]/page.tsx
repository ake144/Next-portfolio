import Link from 'next/link'

export default async function blogDetail({
    params,
}:{
    params:{
        id:string;};})


{      const id = params.id;
    const post = await prisma?.blogPosts.findUnique({
        where: {
          id: parseInt(id), // Assuming 'id' is a numeric identifier
        },
      });
    return(
<>
<div id='postdetail'>
    <header>
    <Link href={{ pathname: `/blog/add` }}>
     <button className="btn btn-primary font-extrabold font-serif">Add New Post</button>
      </Link>
</header>



    <div id='detail' className="flex items-center justify-center ">
      <div className="w-1/2 bg-custom-bg ">
        <div className="max-w-3xl mx-auto   shadow-lg rounded-lg overflow-hidden">   </div>
        <img
              className="w-full h-64 object-cover"
                      src={"data:image/jpeg;base64,"+post?.image}
                      alt={`${post?.topic}`}
                  />
               <h4 className='text-center text-white my-2 font-bold text-2xl'>{post?.topic}</h4>

              <p className="text-base text-white space-y-8 space-x-5 mb-3">
                {post?.description}
              </p>
    
            <div className="flex justify-center">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                // onClick={()=>handleDeleteUser(post.id)}
              >
                Delete
              </button>
              <Link href='blog/id/update'
                className="px-4 py-2 ml-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Update
              </Link>
            </div>
          
                <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md  md:max-w-2xl "> <div className="flex items-start px-4 py-6">
                      <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
                      <div className="">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">akeja  </h2>
                            <small className="text-sm text-gray-700">22h ago</small>
                        </div>
                        {/* <p className="text-gray-700">{Date} </p> */}
                        <span className="font-medium text-1xl text-yellow-300">
                          Passionate Content Creator
                        </span>
                        <span className="text-1xl text-blue-500"> and </span>
                        <span className="font-medium text- text-yellow-300">
                          Writer
                        </span>
                        <div className="mt-4 flex items-center">
                            <div className="flex mr-2 text-gray-700 text-sm mr-3">
                              <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                              <span>40</span>
                            </div> 
                            <div className="flex mr-2 text-gray-700 text-sm mr-8">
                              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                              </svg>
                              <span>55</span>
                            </div>
                            <div className="flex mr-2 text-gray-700 text-sm mr-4">
                              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                </svg>
                              <span><a href='https://twitter.com/'>share  </a></span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>


</>
    )
}