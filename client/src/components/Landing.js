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
        </div>
    );
};

export default Landing;