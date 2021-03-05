import './App.css';
import mobile from './images/illustration-woman-online-mobile.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import shadowMobile from './images/bg-pattern-mobile.svg';
import shadowDesktop from './images/bg-pattern-desktop.svg';


function App() {
  return (
    <div className="pt-5 mt-5">
      <div className="card mt-5 pt-5 pt-md-1">
        <div className="pic">
          <img className="mobile" src={mobile} alt="pic"/>
          <img className="desktop" src={desktop} alt="pic"/>
          <img className="box" src={box} alt="pic"/>
          <img className="shadowMobile" src={shadowMobile} alt="pic"/>
          <img className="shadowDesktop" src={shadowDesktop} alt="pic"/>



      </div>
      <div className="text pt-md-0 pt-5 pt-lg-5 mt-lg-3 ">
        <h4 className="center">FAQ</h4>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                How many team members can I invite?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                No more than 2GB. All files in your account must fit your alloted storage space.
                </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is the maximum file upload size?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                No more than 2GB. All files in your account must fit your alloted storage space.
                </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How many team members can I invite?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                No more than 2GB. All files in your account must fit your alloted storage space.
                </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Can I cancel my subscription?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                No more than 2GB. All files in your account must fit your alloted storage space.
                </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Do you provide additional support?
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                No more than 2GB. All files in your account must fit your alloted storage space.
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div >
  );
}

export default App;
