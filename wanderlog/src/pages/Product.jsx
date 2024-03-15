import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav/>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WanderBlog.</h2>
          <p>
            WanderBlog is a place where you can track the number of places you have visited across the world.
          </p>
          <p>
            Just like google maps it gives you flexibility to pin a location get it's cordinates and it will be added
            to your list, you can you further drill down to cities and countries check when was the time you visited those places
            Add your notes, learn more about that place
          </p>
        </div>
      </section>
    </main>
  );
}
