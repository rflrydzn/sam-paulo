export async function POST(req: Request) {
  const { styleUrl, imageBase64 } = await req.json();
  console.log("API route hit");

  const prompt = `
The first image is the person's face.
The second image is the hairstyle reference.

Apply the hairstyle from the reference image to the person.
Preserve the identity, face, lighting, and background.
Only modify the hair. The result must be photorealistic.
`;
  const formData = new FormData();

  formData.append("prompt", prompt);
  formData.append("model", "google/nano-banana-2");
  formData.append("quality", "auto");
  formData.append("size", "auto");
  formData.append("output_format", "jpeg");

  // Convert base64 back to blob
  const userImageBlob = await fetch(
    `data:image/jpeg;base64,${imageBase64}`,
  ).then((r) => r.blob());
  const styleBlob = await fetch(styleUrl).then((r) => r.blob());

  formData.append("image[]", userImageBlob); // person's face
  formData.append("image[]", styleBlob); // style reference

  const response = await fetch(
    "https://api.imagerouter.io/v1/openai/images/generations",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: formData,
    },
  );

  const text = await response.text();
  console.log(text);

  return new Response(text);
}
