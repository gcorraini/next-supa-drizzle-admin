import styles from "@/app/ui/styles/About.module.css"
import { MdSettings, MdFeedback, MdOutlineFindInPage, MdWarning } from "react-icons/md";
import { BiSolidInjection } from "react-icons/bi";

export default function Page() {
  return (
    <>
    <div className={`container-fluid text-start ${styles.descriptionRow}`}>
      <h2 className="mt-5 pb-2 border-bottom text-start">Cubata Chrome Extension</h2>
      <br />
      <p className="text-start lead">
        Cubata is a Chrome extension designed as a companion app for Dynatrace
        Real User Monitoring (RUM) injection. It enhances your browsing
        experience by detecting competitor modules on webpages and providing
        insights into Dynatrace RUM configurations, along with error and warning
        reporting from the JSAgent.
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
                <h4 className="fw-bold mb-0">Competitor Module Detection</h4>
                <p className="mt-2">
                Automatically detects competitor modules on webpages and changes the extension icon color to signal the presence of competitor modules.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdFeedback className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Feedback Submission</h4>
                <p className="mt-2">
                Allows users to submit feedback to our database when competitor modules are detected. Facilitates sales assessment by collecting real-time competitive intelligence.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <BiSolidInjection className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Dynatrace RUM Injection Detection</h4>
                <p className="mt-2">
                Identifies Dynatrace RUM injection on the current page. Retrieves and displays detailed configuration information.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdWarning className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Error and Warning Reporting</h4>
                <p className="mt-2">
                Shows errors and warnings coming from the Dynatrace JSAgent. Helps in quickly identifying and troubleshooting issues related to Dynatrace RUM.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <MdSettings className={`flex-shrink-0 me-3 text-white ${styles.featureIcon}`}/>
              <div>
                <h4 className="fw-bold mb-0">Detailed Configuration View</h4>
                <p className="mt-2">
                Provides comprehensive details about the detected Dynatrace RUM configuration upon clicking the extension icon.
                </p>
              </div>
            </div>
          </div>
      </div>
      <hr />
    </>
  );
}
