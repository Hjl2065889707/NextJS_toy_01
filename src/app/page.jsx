import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Better design for your digital products.
      </h1>
      <p className={styles.desc}>
        Turning your ideas into remarkable digital products. We bring together the teams from the global tech industry.
      </p>
      <Button text="See Our Works" url="/portfolio" />
    </div>
    <div className={styles.item}>
      <Image 
      src="/hero.png" 
      alt="hero" 
      width={500} 
      height={500} 
      className={styles.image} 
      />
    </div>
   </div>
  );
}
