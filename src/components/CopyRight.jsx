import React from "react";

const currentYear= new Date().getFullYear();

function CopyRight() {
    return (
        <div className="bottom-div">
            <p className="links">© {currentYear} Xuyang Zhao.</p>
        </div>
    )

}

export default CopyRight;