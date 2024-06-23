import React, { Component } from "react";
 
class RegisterBackground extends Component {
    render() {
        const myStyle = {
            backgroundImage:
                "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <div style={myStyle}>
                
            </div>
        );
    }
}
 
export default RegisterBackground;