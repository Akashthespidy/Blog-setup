import classes from "./hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {" "}
        <Image
          src="/images/site/Akash.jpg"
          alt="An Image showing Akash"
          width={300}
          height={300}
        />
      </div>
      <h1>👋 Hi, I am Billal Ahmed Akash</h1>
      <p>
        💡 I blog about problem solving, programming 💻, and web development 🌐
        and also about food 🍔 (as you know food blogging :3).
      </p>
    </section>
  );
}
