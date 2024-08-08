import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Cig Kofte.jpg"
          alt="an image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m M.Deniz</h1>
      <p>This is Next Js practice</p>
    </section>
  );
}

export default Hero;
