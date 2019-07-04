import React from 'react'

const Landing = () => {
    return (
        <div style={{backgroundImage: 'url("../img/bg1.jpg")',
         backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',
             textAlign:'center', color:'white', width:'100%',height:'100vh', paddingTop:'20vh' }}>
        <img src="../img/calibri_1x.png" width='100px' height='80px' style={{ borderRadius:'50%'}} />
        <h1 style={{fontStyle:'italic' , marginTop:0}}>Falcon!</h1>
        <p>Collect feedback from your customers</p>
        <img src="../img/mockup1.png" width='450px' height='500px' style={{ }} />


        <footer className="page-footer red lighten-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="center">
                <i className="center small material-icons">drafts</i>
              </h5>
              <h5 className="center white-text">What is Falcon</h5>
              <p className="grey-text text-lighten-4">
              Falcon is a simple, hassle-free service that allows you to send
                mass emails to a large list of users for the purpose of
                collecting feedback. With this platform, you can simplify the
                way you drive customer engagement and achieve your business
                goals with email marketing campaigns that allow you to track
                service results.
              </p>
            </div>
            <div className="col l6 s12">
              <h5 className="center">
                <i className="center small material-icons">smartphone</i>
              </h5>
              <h5 className="center white-text">How to Use Falcon</h5>
              <p className="grey-text text-lighten-4">
                To use our service, simply sign-up with any Google account. Add
                survey credits with a click of the button, curate a new survey
                form, and begin sending out email campaigns to designated users.
                With convenience and a seamless user experience in mind, you can
                watch as your customers respond to your inquiry while we take
                care of the rest.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Falcon 2019 | {''}
            <a
              className="orange-text text-lighten-3"
              href="https://github.com/OceanRonquilloMorgan/emaily"
            >
              
            </a>
          </div>
        </div>
      </footer>

        </div>
    );
};

export default Landing;