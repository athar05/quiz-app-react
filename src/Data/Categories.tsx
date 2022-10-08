type CategoryType = {
  category: string,
  value: number,
  img: string
}[]


const Categories: CategoryType = [
  {
    category: "General Knowledge",
    value: 9,
    img: "/assets/images/quiz-general-knowledge.svg",
  },
  { category: "Books", value: 10, img: "/assets/images/quiz-books.svg" },
  { category: "Films", value: 11, img: "/assets/images/quiz-movies.svg" },
  { category: "Music", value: 12, img: "/assets/images/quiz-music.svg" },
  {
    category: "Science and Nature",
    value: 17,
    img: "/assets/images/quiz-science.svg",
  },
  { category: "Sports", value: 21, img: "/assets/images/quiz-sports.svg" },
  {
    category: "Geography",
    value: 22,
    img: "/assets/images/quiz-geography.svg",
  },
  { category: "History", value: 23, img: "/assets/images/quiz-history.svg" },
  { category: "Politics", value: 24, img: "/assets/images/quiz-politics.svg" },
  {
    category: "Celebrities",
    value: 26,
    img: "/assets/images/quiz-celebreties.svg",
  },
  { category: "Animals", value: 27, img: "/assets/images/quiz-animals.svg" },
  { category: "Vehicles", value: 28, img: "/assets/images/quiz-vehicle.svg" },
];

export default Categories;
