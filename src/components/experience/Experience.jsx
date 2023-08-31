import './styles.css'
import '../sections/styles.css'
export default function Experience() {
    return (
        <section id="experience" class="experience">
            <div class="section-container">
                <h1 class="section-title">Professional Experience</h1>
                <table class="no-border-table">
                    <tr>
                        <td class="job-date">
                            <h2>July 2022-July 2023</h2>
                        </td>
                        <td>
                            <h2 class="job-name">Software Engineer I, PeopleStrategy</h2>
                            <ul class="job-desc-list">
                                <li>
                                    <p>Designed and implemented 15+ app pages for iOS, Android, and Web using
                                        Flutter
                                        best practices</p>
                                </li>
                                <li>
                                    <p>Implemented state management of user data using InheritedWidget and Provider
                                    </p>
                                </li>
                                <li>
                                    <p>Modeled customer data using GraphQL and served to the app using Spring
                                        Gateway and Netflix&apos;s DgsQuery</p>
                                </li>
                                <li>
                                    <p>Built a CD pipeline for single click App Store deployment using Jenkins and
                                        Fastlane</p>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="job-date">
                            <h2>May 2022-July 2022</h2>
                        </td>
                        <td>
                            <h2 class="job-name">Software Engineer I, PeopleStrategy</h2>
                            <ul class="job-desc-list">
                                <li>
                                    <p>Designed and presented Figma mockups for mobile HR app that led to adoption by
                                        stakeholders</p>
                                </li>
                                <li>
                                    <p>Implemented frontend designs using Flutter and documented best practices using
                                        Confluence
                                    </p>
                                </li>
                                <li>
                                    <p>Repeatedly delivered features on schedule on a fully remote agile team with
                                        biweekly iterations</p>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    );
}