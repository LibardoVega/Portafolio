import React from "react";

export const Header: React.FC = () => {

    return(
        <div className="header fs-6" style={{ backgroundColor: 'rgb(12,13,30)'}}>
            <img src="/uno.gif" width={50}/>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    )
}