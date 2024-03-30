import pic from "../../assets/coding.svg";
import githubIcon from "../../assets/github.svg";
import igIcon from "../../assets/instagram.svg";
import fbIcon from "../../assets/facebook.svg";
import lkIcon from "../../assets/linkedin.svg";

const Home = () => {
  const icon = [githubIcon, igIcon, fbIcon, lkIcon];
  const github = "https://github.com/tushhaaarrrrrrr";
  const instagram = "https://www.instagram.com/_.tushhaaarrrrrrr/";
  const facebook = "https://www.facebook.com/profile.php?id=100092165856214";
  const linkedin = "https://www.linkedin.com/in/tushhaaarrrr/";
  const link = [github, instagram, facebook, linkedin];
  return (
    <section
      id="home"
      className="pt-1 flex flex-col-reverse items-center lg:flex lg:flex-row lg:justify-center lg:mt-52 lg:space-x-20"
    >
      <div className="w-80 md:w-[60%] lg:w-[35%]">
        <h1 className="this mt-10 text-5xl text-white lg:text-6xl lg:mt-0">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Tushar
          </span>
        </h1>
        <h1 className="lg:w-full text-4xl text-white this lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Full-Stack
          </span>{" "}
          Developer
        </h1>
        <p className="mt-3 text-left ">
          Hello! I'm Tushar Das, a full-stack developer proficient in HTML5, CSS, 
          JavaScript, and frameworks including Bootstrap, jQuery, SASS, React, and Redux. 
          I'm skilled in creating visually appealing and user-friendly websites prioritizing exceptional user experiences. 
          I'm also proficient in Python for scientific computing with tools like Jupyter Notebooks, NumPy, Pandas, and data 
          visualization libraries. Additionally, I have extensive expertise in machine learning with TensorFlow, Keras, NLP, 
          reinforcement learning, and deep learning.</p>
        <ul className="flex mt-3 space-x-4">
          {icon.map((icon, i) => (
            <a href={link[i]} target="_blank" key={i}>
              <li>
                <img src={icon} width={30} />
              </li>
            </a>
          ))}
        </ul>
      </div>
      <img src={pic} className="w-80 lg:w-[500px] mt-32 lg:mt-0" />
    </section>
  );
};

export default Home;
