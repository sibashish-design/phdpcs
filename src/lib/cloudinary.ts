export const uploadToCloudinary = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset',  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }


    const data = await response.json();
    
    console.log('Cloudinary response data:', data); // 👈 See the full response
    console.log('Uploaded image URL:', data.secure_url); // 👈 See the final URL
    return data.secure_url;

  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};
