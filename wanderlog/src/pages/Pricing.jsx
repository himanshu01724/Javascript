// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav/>
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just 0.2$/month.
          </h2>
          <p>
          Ready to embark on your next adventure? 
          Contact us to track all your dream vacation and take advantage of our unbeatable pricing plans. 
          Our team of travel experts is here to help you plan the perfect getaway tailored to your preferences and budget.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
