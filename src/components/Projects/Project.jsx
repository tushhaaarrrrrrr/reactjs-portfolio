import Card from "./Card";
import snipe from "../../assets/Healthcare-costs.webp";
import ghibli from "../../assets/book-recommendation-system.jpg";
import movie from "../../assets/spam.png";
import lastfm from "../../assets/stock.jpg";

const Project = () => {
  return (
    <section className="slide-up flex flex-col items-center">
      <h1 className="flex justify-center mt-10 mb-5 text-2xl text-transparent this bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-Inter">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-4">
        <Card
          img={ghibli}
          title={"Book Recommendation Engine"}
          content={
            "A Book Recommendation Engine that uses the K-Nearest Neighbors (KNN) algorithm"
          }
          tag={"Google Collab"}
          link={"https://colab.research.google.com/drive/158SxIY5ROtI_7fyoev7Pag5f381d8w_U?usp=drive_link"}
        />
        <Card
          img={snipe}
          title={"Health Costs Calculator"}
          content={
            "An Health Costs Calculator that uses Linear Regression"
          }
          tag={"Google Colab"}
          link={"https://colab.research.google.com/drive/1zPNFZT052uAfbMOvy08PlknZY7KInw-G?usp=drive_link"}
        />
        <Card
          img={movie}
          title={"SMS Text Classifier"}
          content={
            "A Hybrid CNN-LSTM Model for SMS Spam Detection"
          }
          tag={"Google Colab"}
          link={"https://colab.research.google.com/drive/1rjQ1Nw5DUSzAph9DLWhydJ8eVvegmEbu?usp=drive_link"}
        />
        <Card
          img={lastfm}
          title={"Stock Price Forecaster"}
          content={
            "The project involves developing a time-series forecasting model using LSTM (Long Short-Term Memory) neural networks to predict future values of a stock *Definitely not financial advice*"
          }
          link={"https://colab.research.google.com/drive/1tNTQR6PDgFKYWGpb09sh9FVLy1qVE_Dc?usp=drive_link"}
          tag={"Google Collab"}
        />
      </div>
    </section>
  );
};

export default Project;
