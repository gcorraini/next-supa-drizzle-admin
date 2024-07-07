import Image from "next/image";
import styles from "@/app/ui/styles/Landing.module.css";

export default function Home() {
  return (
    <div className={`mt-5 ${styles.fullHeight}`}>
      <h1 className="mt-5">Cubata Dashboard</h1>
      <hr />
      <p className="lead mb-5">Welcome to the Cubata Dashboard, the central repository for all feedback gathered via the Cubata Chrome extension.</p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
      </p>
    </div>
  );
}
