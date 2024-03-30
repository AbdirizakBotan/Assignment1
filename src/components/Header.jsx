import { useRef } from "react";
function Header(){

    const aboutRef = useRef(null);

    const handleLinkClick = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', });
        }
    };
return <div>
    <div className="header-parent">
        <h1 className="text-4xl">Eng_<span className="text-blue-800">Ibrahim</span></h1>
        <ul>
            <li onClick={() => handleLinkClick("home")}>Home</li>
            <li onClick={() => handleLinkClick("about")}>About</li>
            <li onClick={() => handleLinkClick("skills")}>Skills</li>
            <li onClick={() => handleLinkClick("projects")}>Projects</li>
            <li onClick={() => handleLinkClick("contact")}>Contact</li>
        </ul>
    </div>
</div>
}
export default Header