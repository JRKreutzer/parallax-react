import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>José Kreutzer</motion.span>
            <div className="social">
                <motion.a href="" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>
                    <img src="/facebook.png" alt="Facebook" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>
                    <img src="/instagram.png" alt="Instagram" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>
                    <img src="/youtube.png" alt="Youtube" />
                </motion.a>
                <motion.a href="" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>
                    <img src="/dribbble.png" alt="Dribbble" />
                </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Navbar