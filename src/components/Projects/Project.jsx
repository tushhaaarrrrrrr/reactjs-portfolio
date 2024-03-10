import Card from "./Card";
import snipe from "../../assets/snipe.webp";
import ghibli from "../../assets/Ghibli.webp";
import movie from "../../assets/movie.webp";
import lastfm from "../../assets/lastfm.webp";

const Project = () => {
  return (
    <section className="slide-up flex flex-col items-center">
      <h1 className="flex justify-center mt-10 mb-5 text-2xl text-transparent this bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-Inter">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-4">
        <Card
          img={ghibli}
          title={"Ghibli"}
          content={
            "A Ghibli inspired web design, my very first attempt on designing using figma"
          }
          tag={"Figma"}
          link={"https://www.behance.net/gallery/182842763/Ghibli-Web-Design"}
        />
        <Card
          img={snipe}
          title={"Snipebot"}
          content={
            "Snipe is an advanced Discord SnipeBot that can retrieve upto 20 deleted/edited messages."
          }
          tag={"Discord.js"}
          link={"https://github.com/marrrkkk/SnipeBot"}
        />
        <Card
          img={movie}
          title={"Movie Search App"}
          content={
            "This project is a web application built using Next.js framework for server-side rendering and React.js"
          }
          tag={"NextJS"}
          link={"https://nextjs-movie-search.vercel.app/"}
        />
        <Card
          img={lastfm}
          title={"Lastfm Scrobbler"}
          content={
            "Python script for automatic music scrobbling to Last.fm using the Last.fm API."
          }
          link={"https://github.com/marrrkkk/lastfm-auto-scrobbler"}
          tag={"Python"}
        />
      </div>
    </section>
  );
};

export default Project;
