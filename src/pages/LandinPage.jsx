import Logo from "../assets/logo.jpeg"
import LandingImage from "../assets/fullimagec1.jpeg"
import '../App.css'
function LandingPage() {
  return (
    <div style={{height:"calc(100vh - 70px)"}}>
        <div style={{width:"100%", backgroundColor: "#1e2a38", display:"flex", alignItems:"center",height:"80px"}}>
            <img src={Logo} alt="Logo" style={{maxWidth:"70px",paddingLeft:"15px"}}/>
            <h1 style={{color:"white",paddingLeft:"70px"}}>Cat Inspect </h1>
           
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <img src={LandingImage} alt="Landing Image" style={{ maxWidth: "100%", opacity: "0.9" }} />
    <div style={{ position: "absolute", color: "white", top: "20%", left: "50%", transform: "translate(-50%, -20%)", zIndex: 1 }}>
        <h1 style={{ fontSize: "2rem", marginTop:"20px" }}>
            Effortlessly record and manage equipment inspections with voice input.
        </h1>
        {/* <h2 style={{ fontSize: "1.7rem", margin: "10px 0" ,paddingTop:"350px"}}>
            Streamline Your Inspection Process
        </h2> */}
        <p style={{ fontSize: "1.3rem", marginTop: "350px" }}>
            Use our innovative voice-driven inspection system to easily log details about equipment,
            capture images, and generate detailed reports—all without the need for manual typing.
        </p>
        <button className="start-inspection-btn" onClick={() => startInspection()} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>
            Start Inspection
        </button>
    </div>
</div>

         
    </div>
  );
}

function startInspection() {
  console.log('Navigating to inspection page...');
}

export default LandingPage;
