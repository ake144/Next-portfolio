"use server"



export const getById=async(id:string)=>{

}
export const getAll = async()=>{


    return await prisma?.blogPosts.findMany()

}
export const updateById =async ()=>{

}


export const createPost = async (formData: FormData) => {
    try {
      const title = formData.get('title') as string;
      const url = formData.get('url') as string;
      const description = formData.get('description') as string;
      const imageFile = formData.get('image') as File | null;
  
      if (!title || !url || !description || !imageFile) {
        console.error('Incomplete form data');
        return;
      }
  
      const imageString = await toBase64(imageFile); // Convert image to base64 string
  
      const data = {
        title,
        url,
        description,
        image: imageString, // Attach base64 image string to the data
      };
  
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Post submitted successfully!');
        console.log({ response });
      } else {
        console.error('Failed to submit post:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };