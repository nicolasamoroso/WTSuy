const AboutMovie = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="about-container">
      <h1 className="about-title">{title}</h1>
      <p className="about-desc">{description}</p>
    </div>
  );
};

export default AboutMovie;
