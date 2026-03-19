async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function generateAllSides(
  images: { front: File; side: File; back: File },
  styleUrl: string,
) {
  const [frontB64, sideB64, backB64] = await Promise.all([
    fileToBase64(images.front),
    fileToBase64(images.side),
    fileToBase64(images.back),
  ]);

  const [frontRes, sideRes, backRes] = await Promise.all([
    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ styleUrl, imageBase64: frontB64 }),
    }).then((r) => r.json()),

    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ styleUrl, imageBase64: sideB64 }),
    }).then((r) => r.json()),

    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ styleUrl, imageBase64: backB64 }),
    }).then((r) => r.json()),
  ]);

  return {
    front: frontRes.data?.[0]?.url ?? null,
    side: sideRes.data?.[0]?.url ?? null,
    back: backRes.data?.[0]?.url ?? null,
  };
}
