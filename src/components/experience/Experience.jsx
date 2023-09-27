import "./styles.css";
import "../sections/styles.css";
export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h1 className="section-title">Professional Experience</h1>
        <table className="no-border-table">
          <tbody>
            <tr>
              <td className="job-date-col">
                <h3 className="job-date-large">July 2022-July 2023</h3>
              </td>
              <td>
                <h2 className="job-name">
                  Software Engineer I, PeopleStrategy
                </h2>
                <h3 className="job-date-mobile">July 2022-July 2023</h3>
                <ul className="job-desc-list">
                  <li>
                    <p>
                      Designed and implemented 15+ app pages for iOS, Android,
                      and Web using Flutter best practices
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented state management of user data using
                      InheritedWidget and Provider
                    </p>
                  </li>
                  <li>
                    <p>
                      Modeled customer data using GraphQL and served to the app
                      using Spring Gateway and Netflix&apos;s DgsQuery
                    </p>
                  </li>
                  <li>
                    <p>
                      Built a CD pipeline for single click App Store deployment
                      using Jenkins and Fastlane
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="job-date-col">
                <h3 className="job-date-large">May 2022-July 2022</h3>
              </td>
              <td>
                <h2 className="job-name">Intern, PeopleStrategy</h2>
                <h3 className="job-date-mobile">May 2022-July 2022</h3>
                <ul className="job-desc-list">
                  <li>
                    <p>
                      Designed and presented Figma mockups for mobile HR app
                      that led to adoption by stakeholders
                    </p>
                  </li>
                  <li>
                    <p>
                      Implemented frontend designs using Flutter and documented
                      best practices using Confluence
                    </p>
                  </li>
                  <li>
                    <p>
                      Repeatedly delivered features on schedule on a fully
                      remote agile team with biweekly iterations
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
