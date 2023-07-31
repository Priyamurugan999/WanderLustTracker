/* eslint-disable jsx-a11y/img-redundant-alt */
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img2.webp"
          alt="wander image"
        />
        <div>
          <h2>About WanderlustTracker.</h2>
          <p>
            WanderlustTracker is an enchanting web application that allows you to
            track and showcase your footsteps across the globe. Whether you're exploring bustling metropolises,
            tranquil towns, or remote villages, WanderlustTracker keeps a beautiful record of your adventures.
            Pinpoint the cities you've visited on an interactive world map, and reminisce about the wonderful
            experiences you've had in each place. Share your journeys with friends and family, inspiring
            them to wander the world and create their own unforgettable memories. WanderlustTracker is your digital
            travel journal, ensuring that every step you take becomes a cherished part of your life's grand
            adventure. Let the world be your playground,
            and let WanderlustTracker be your guide to preserving and sharing the wonders of your global escapades.
          </p>
        </div>
      </section>
    </main>
  );
}
