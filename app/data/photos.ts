export type Photo = {
  id: string;
  title: string;
  src: string;
};

export const photos: Photo[] = [
  { id: "1", title: "A Liang", src: "/photos/A%20LIANG%202.png" },
  { id: "2", title: "Fire Demon", src: "/photos/FIRE%20DEMON%20FULL.png" },
  { id: "3", title: "Heaven Demon", src: "/photos/HEAVEN%20DEMON%20BG.png" },
  { id: "4", title: "Ling Cage", src: "/photos/LING%20CAGE%20NO%20TEXTURE.png" },
  { id: "5", title: "Ping An", src: "/photos/PING%20AN.jpg" },
  { id: "6", title: "Wang Lin", src: "/photos/WANG%20LIN%20POINTING%2001.png" },
];

export const getPhotoById = (id: string | undefined) => {
  if (!id) return null;
  const normalizedId = String(id).trim();
  return photos.find((photo) => photo.id === normalizedId) ?? null;
};
