import SExperience from "./SExperience";

// const Main = () => {
  
  
const Main = ({ Data }) => {
  const { Experience } = Data;

    return (
      <div className="right_Side">
        <div className="about profile-sec">
          <h2 className="title2">Profile</h2>
          <p>
          1.2 years’ Experience with React.js, React Hooks, Redux, ECMAScript, RESTful APIs
Finding opportunity where I can expand my knowledge & ability using my 
programming skills <br />
            <br />
            3+ year experience in WordPress. 6+ years’ experience in Web Development. 
Energetic Web Designer & Developer. Total more than 10+ years’ experience in 
creating & maintaining functional, attractive & responsive websites for various types 
of industries, including Luxury Hotels, Real Estate & Corporate Companies. Clear 
understanding of all modern technologies with best design practices. Experience in 
WordPress Customization & Mobile Application Development (iOS & Android). Basic 
knowledge of Search Engine Optimization process (SEO). Strong organizational skills 
to maintain multiple tasks. I Create website layouts/user interface by using standard 
HTML/CSS practices. Also, I have experience in Graphic Designing & company 
branding.  <br />
            <br />
            A result oriented individual! Expertise is broad in scope. Possess a high 
            technical aptitude and a high level of creativity
          </p>
        </div>

      
        <div className="about experience-sec">
          <h2 className="title2">KEY SKILLS </h2>
          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              Client account management, handling team independently, 
              interaction with the client and understand their requirements 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              Web Applications Development for Mobile & Web  
              </p>
            </div>
          </div>


          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              Design & Development of CMS & ecommerce websites
              </p>
            </div>
          </div>


          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              	Ensuring web site quality, performance and reliability by using third party website like GTmetrix 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              	Understanding of screen resolutions and how to design for them 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              Testing with multiple browsers and operating systems to ensure the best compatibility possible 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              	Well-versed in Google Analytics
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              Experience with search engine optimization (SEO) 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              	Knowledge of Facebook & email marketing campaign 
              </p>
            </div>
          </div>

          <div className="box">
            <div className="year_company_less">
              <h4>●	</h4>
            </div>
            <div className="text">
              <p>
              	Speed optimization 
              </p>
            </div>
          </div>
  
        </div>





        <SExperience Experience={Experience} />





        
        <div className="about interest">
          <h2 className="title2">Interests</h2>
          <ul>
            <li>
              <i className="fa fa-book" aria-hidden="true"></i> Reading
            </li>
            <li>
              <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
            </li>
            <li>
              <i className="fa fa-cutlery" aria-hidden="true"></i> Food
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true"></i> Traveling
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Main;
  