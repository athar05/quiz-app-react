import CategoryCard from "../Categories-card/CategoryCard";

function HomeBody() {
  return (
    <div className="home-body-container">
      <div className="quiz-settings">
        <h2>Quiz Settings</h2>
        <CategoryCard />
      </div>
      <div className="home-body-banner">
        <img
          src="/assets/images/quiz-banner.svg"
          alt="quiz banner"
          className="quiz-banner"
        />
      </div>
    </div>
  );
}

export default HomeBody;
