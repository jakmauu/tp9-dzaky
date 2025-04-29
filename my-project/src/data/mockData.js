import samihImage from '../assets/samih1.jpg';
import ompongImage from '../assets/ompong.jpg';
import aidelImage from '../assets/aidel.jpg';
import ahmadImage from '../assets/ahmad.jpg';

export const mockPosts = {
  page: 1,
  results: [
    {
      id: 1,
      name: "Samih",
      role: "Student",
      joinDate: "January 2023",
      location: "Pamulang, Indonesia",
      description: "Caffeine-powered student who once debugged code in his sleep. Will trade programming skills for indocafe mix coffee.",
      image: samihImage
    },
    {
      id: 2,
      name: "Ompong",
      role: "Professional",
      joinDate: "March 2022",
      location: "Bekasi, Indonesia",
      description: "Tech wizard by day, Netflix marathoner by night. Can fix your computer but can't fix his sleep schedule.",
      image: ompongImage
    },
    {
      id: 3,
      name: "Aidel",
      role: "Soldier",
      joinDate: "November 2021",
      location: "Hanoi, Vietnam",
      description: "Defender of code, conqueror of bugs. Once did 100 push-ups after each failed compile just for fun.",
      image: aidelImage
    },
    {
      id: 4,
      name: "Ahmad",
      role: "Video Creator",
      joinDate: "August 2023",
      location: "Flores, Indonesia",
      description: "Tech master who films tutorials between naps. His most popular video is 'How to Code While Eating Nasi Padang'.",
      image: ahmadImage
    }
  ]
}