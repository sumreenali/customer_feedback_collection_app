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
      
    <div style={{ textAlign:'center' , color:'gray', margin:'5% 10%' }}>
    <h3 style={{ fontWeight:500, color:'#552fb6' }}> Who We Are </h3>
        <p>
            Falcon you can create a simple, single or multi-question SMS survey in minutes,
            and be receiving invaluable client or patient feedback by return text message.
            Gaining customer feedback through an SMS survey has traditionally been the domain of large, 
            expensive applications. Now, with Falcon, you can create your single or multiple question
            SMS survey online, invite participants by text, and view and analyse participant feedback online.

            And, because all you pay for are the messages (questions) that you send out, conducting a
         survey by text is very cost effective too.</p>

      <p> With Falcon you first create your survey by adding the questions that 
          you would like the survey participants to respond to. You can also send
           out optional introductory and thank-you texts to begin and end your survey
            with, if you wish.</p>

       <p> Once created, you can then invite participants to take your survey by
            either sending out an invitation text, or have participants respond to
             some other medium you wish to use to promote your survey. You can also
              automate the sending of an outbound invitation text from within your
               own application, by using our Developer Toolkit.
            </p>
        <button href="gity" className="btn" style={{ fontWeight:500, backgroundColor:'#552fb6', color:'White' , margin:'2% 0%' }} >Try it for Free</button>
</div>
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
            Falcon 2018 | {''}
            <a
              className="orange-text text-lighten-3"
              href="https://github.com/sumreenali/customer_feedback_collection_app.gity"
            >
              Source Code
            </a>
          </div>
        </div>
      </footer>

        </div>
    );
};

export default Landing;