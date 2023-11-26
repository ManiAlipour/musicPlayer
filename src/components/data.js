import { v4 as uuidv4 } from "uuid";

export default function musicData() {
  const musics = [
    {
      name: "بانوک",
      artist:"عبدالواحد",
      cover: "https://upmusics.com/wp-content/uploads/2023/11/abdolvahed-banok-68057.jpg",
      audio: "https://media-vip.my-pishvaz.com/upmusics/AliBZ/Abdolvahed%20-%20banok%20(320).mp3?st=1uwckNDTrS57ilopz91lXg&e=1699611610",
      id: uuidv4(),
      theme: ["#fff","#401D19"],
      covered: true,
    }, 
    {
      name: "کادو",
      artist:"آراز",
      cover: "https://upmusics.com/wp-content/uploads/2023/11/Araz-Kado.jpg",
      audio: "https://irsv.upmusics.com/AliBZ/Araz%20-%20Kado%20(320).mp3",
      id: uuidv4(),
      theme: ["#fff", "#BBBDBD"],
      covered: false,
    }, 
    {
      name: "صدای تو",
      artist:"حجت اشرف زاده",
      cover: "https://upmusics.com/wp-content/uploads/2023/11/photo_2023-11-08_21-19-17.jpg",
      audio: "https://irsv.upmusics.com/AliBZ/Hojat%20Ashrafzadeh%20%7C%20Sedaye%20To%20(320).mp3",
      id: uuidv4(),
      theme: ["#fff", "#939393"],
      covered: false,
    }, 
    {
      name: "زرد",
      artist:"عماد طالب زاده ",
      cover: "https://upmusics.com/wp-content/uploads/2023/11/IMG_20231109_193514_205_resize_57.jpg",
      audio: "https://irsv.upmusics.com/AliBZ/Emad%20Talebzadeh%20%7C%20Zard%20(320).mp3",
      id: uuidv4(),
      theme: ["#fff", "#C2A790"],
      covered: false,
    }, 
    {
      name: "دنیا",
      artist:"محمودرضا اشرفی",
      cover: "https://upmusics.com/wp-content/uploads/2023/11/photo_2023-11-09_16-26-35.jpg",
      audio: "https://irsv.upmusics.com/AliBZ/Mahmoudreza%20Ashrafi%20%E2%80%93%20Donya%20(320).mp3",
      id: uuidv4(),
      theme: ["#fff", "#4992B9"],
      covered: false,
    }, 
  ];
  return musics
};