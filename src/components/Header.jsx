import React from "react"

export default function Header() {
    return (
        <header>
            <img src="./image/portrait.jpg" className="portrait" alt="portrait of designer"/>
            <h2 className="name">Martin Bollin</h2>
            <p className="job-title">Junior Fullstack Developer</p>
            <p className="phone"><i class="fa-solid fa-phone fa-xs"></i>+43 676 354 1482</p>
            <div className="btn-container">
                <a href="mailto:martinbollin92@gmail.com" className="email-btn"><i className="fa-solid fa-envelope"></i>
                Email</a>
                <a href="https://www.linkedin.com/in/martin-bollin-41ba5b26a/" className="linkedIn-btn" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </header>
    )
}