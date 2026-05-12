export const uploadToCloudinary = async (file: File): Promise<string | null> => {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    console.log("Uploading to Cloudinary:", { cloudName, uploadPreset, fileName: file.name, fileSize: file.size, fileType: file.type });

    if (!cloudName || !uploadPreset) {
      console.error("Missing Cloudinary env variables");
      return null;
    }

    if (!file || file.size === 0) {
      console.error("File is empty or invalid");
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    console.log("Posting to:", url);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Cloudinary response:", data);

    if (!response.ok) {
      console.error("Cloudinary error:", data.error?.message);
      return null;
    }

    return data.secure_url;

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};