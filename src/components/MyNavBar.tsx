import ThemeSwitcher from "./ThemeSwitcher";
import WrapperComponent from "./WrapperComponent";
import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { useTheme } from "next-themes";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
function MyNavBar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));
    const [isSelected, setIsSelected] = useState(theme === 'light');
    const glowClass = theme === "dark" ? "glow" : "glow-light";
    useEffect(() => {
      setIsSelected(theme === 'light');
    }, [theme]);
    const handleToggle = () => {
      const newTheme = isSelected ? 'dark' : 'light';
      document.body.style.transition = 'background-color 0.5s ease';
      if (newTheme === 'dark') {
        document.body.style.backgroundColor = "black"; 
      }else{
        document.body.style.backgroundColor = "white";
      }
      setTheme(newTheme);
      setIsSelected(!isSelected);
    };
  return (
    <nav ref={ref} style={{ display: 'flex', justifyContent: 'end', padding: '1%', paddingRight: '2%'}} className={glowClass}>
      <div style={{position: 'relative'}}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
      {isOpen && (
        <div  style={{ position: 'absolute', top: '100%', right: '0' }}>
          
          <Link to=""><WrapperComponent IconComponent={ImProfile} /></Link>
          <ThemeSwitcher isSelected={isSelected} onToggle={handleToggle} />
          
        </div>
      )}
      </div>
    </nav>
  );
}
export default MyNavBar;
