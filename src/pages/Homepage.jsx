import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          WanderlustTracker keeps track of your adventures.
        </h1>
        <h2>
          With WanderlustTracker, you'll never forget the wonderful experiences you've had while
          wandering the world. Pinpoint your footsteps on the interactive world map, add personalized
          notes cherish the memories of your explorations. Share your travel
          accomplishments with friends and family, inspiring them to embark on their own epic journeys.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
