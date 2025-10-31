import logoImage from "../assets/images/CORPLAND5.png"
import "../styles/components/Logo.css"

const Logo = () => {
  return (
    <img src={logoImage} className="logo" alt="Corpland Logo" />
  )
}

export default Logo