import GlowingStar from "@/svgs/glowing-star";
import "@/components/thanks-screen/thanks-screen.css";

const ThanksScreen = () => {
  const data = localStorage.getItem("review");
  const { name, movie } = data ? JSON.parse(data) : { name: "", movie: "" };

  localStorage.removeItem("review");
  return (
    <div className="thx-bg">
      <div className="thx-container">
        <h3>Reseña de peliculas</h3>
        <h2>¡Muchas gracias {name}!</h2>
        <GlowingStar />
        <p>Tu reseña sobre la pelicula "{movie}" ha sido enviada.</p>
      </div>
    </div>
  );
};

export default ThanksScreen;
