
export default function AddPost() {

  const createPost = async (formData: FormData) => {
    'use server'
  
    try {
      const file = formData.get('image') as File;
  
      if (!file) {
        console.error('No image file found.');
        return; // Handle accordingly
      }
  
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
  
      // Convert the buffer to a base64 string
      const base64String = buffer.reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      );
      const base64 = btoa(base64String);
  
   
      const description = formData.get('description') as string;
      const topic = formData.get('topic') as string; // Get topic from form data
      const link = formData.get('link') as string; // Get link from form data
  
      if (  !description || !topic || !link) {
        console.error('Incomplete form data');
        return; // Handle accordingly
      }
  
      const data = {
      
        description,
        image: base64, 
        topic,
        link,
      };
  
      const createdPost = await prisma?.blogPosts.create({
        data,
      });
      console.log('Post created:', createdPost);
      
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error accordingly
    }
  };
  
  

  return (
    <form action={createPost } method="POST" className='flex flex-col gap-4 text-black'>
    <input type="text" name="topic" placeholder='title of the post'  className="w-full px-3 py-2 text-sm border 
    border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
    <input type='url'  name='link' placeholder='enter the link address' className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500' />
    <input type="text" name="description"  placeholder='enter the description of content'  className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500' />
    <input  id='image' type="file" name="image"   className='bg-sky-90'/>
    <button type="submit" className='w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300'>POST</button>
  </form>
  );
  }
