import { useState } from "react";

export default function App() {
    
    const [showPassword, setShowPassword] = useState(false);
   
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <main className="main-container">
           
            <div className="content">

                {/* Input */}
                <input
                    className="password-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                />

                {/* Button */}
                <button className="toggle-button" onClick={handleShowPassword}>
                    Show
                </button>
                
            </div>

        </main>
    );
}



