import React from "react";
import "./style.css";

interface SideProps {
    content: React.ReactNode;
    backgroundColor: string;
}

const Side: React.FC<SideProps> = ({ content, backgroundColor }) => {
    return (
        <div className="side" style={{ backgroundColor }}>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default Side;