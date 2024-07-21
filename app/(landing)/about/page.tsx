import styles from "@/app/ui/styles/About.module.css"
import { MdSettings, MdFeedback, MdOutlineFindInPage, MdWarning } from "react-icons/md";
import { BiSolidInjection } from "react-icons/bi";

export default function Page() {
  return (
    <>
    <div className={`container-fluid text-start ${styles.descriptionRow}`}>
      <h2 className="mt-5 pb-2 border-bottom text-start">Section introduction</h2>
      <br />
      <p className="text-start lead">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda fugit perspiciatis atque qui quos eum incidunt adipisci voluptate provident est cumque obcaecati debitis, nobis quia ratione harum. Maiores, earum!
      </p>
      <br />
    </div>
      {/* FEATURES GRID */}
      <div className={`container-fluid text-start ${styles.featuresRow}`} id="icon-grid">
      <h2 className="pb-2 border-bottom text-start">Features</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
              <MdOutlineFindInPage className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feature #1</h4>
                <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti rem fugiat nam, quibusdam dolore unde? Facere, laboriosam explicabo quam aperiam earum non libero aliquid nostrum excepturi dolorem vero quaerat.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdFeedback className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feature #2</h4>
                <p className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, officiis. Molestiae iure fugit eligendi maiores error sed assumenda. Cupiditate eos nobis at quo doloremque distinctio nam. Architecto eligendi dolore quidem?
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <BiSolidInjection className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feature #3</h4>
                <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam deleniti tempore laudantium porro mollitia ad commodi sapiente ipsa officia fugiat officiis, voluptas optio consequuntur sit, aut libero rerum accusamus!
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdWarning className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feature #4</h4>
                <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas similique, in nostrum ex, praesentium architecto aliquid optio, quos corporis modi incidunt labore. Illo ea, aliquam hic assumenda expedita et.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdSettings className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feature #5</h4>
                <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt amet, vel aliquid temporibus reprehenderit dolorum quae placeat ab veniam doloremque in, fuga consequuntur omnis! Necessitatibus impedit iusto aut ipsa!
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
