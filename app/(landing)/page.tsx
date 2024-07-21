import Image from "next/image";
import styles from "@/app/ui/styles/Landing.module.css";

export default function Home() {
  return (
    <div className={`mt-5 ${styles.fullHeight}`}>
    {/* // <div className={`position-absolute top-50 start-50 translate-middle ${styles.fullHeight}`}> */}
      <h1 className="mt-5">My App Landing</h1>
      <hr />
      <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus vero eius, sapiente, possimus tenetur et eveniet dolorem cum sit voluptatum eos asperiores nesciunt? Atque quos minima soluta est magnam.</p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
      </p>
    </div>
  );
}
