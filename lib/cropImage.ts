export async function cropCenter(blob: Blob): Promise<File> {
  const img = new Image();
  const url = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const size = 700;

      canvas.width = size;
      canvas.height = size;

      const startX = (img.width - size) / 2;
      const startY = (img.height - size) / 2;

      ctx?.drawImage(img, startX, startY, size, size, 0, 0, size, size);

      canvas.toBlob(
        (croppedBlob) => {
          if (!croppedBlob) return;

          const file = new File([croppedBlob], "webcam-photo.jpg", {
            type: "image/jpeg",
          });

          resolve(file);
        },
        "image/jpeg",
        1,
      );
    };

    img.src = url;
  });
}
