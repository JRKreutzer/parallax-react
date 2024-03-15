import "./hero.scss"
import { motion } from 'framer-motion';

const textVariants = {
    initial:{
        x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-320%",
        transition: {
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }  
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>João Silva</motion.h2>
                    <motion.h1 variants={textVariants}>Desenvolvedor&nbsp;Web e UI designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Veja meus últimos trabalhos</motion.button>
                        <motion.button variants={textVariants}>Entre em Contato</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="inicial" animate="animate">
                Escritor e Criador de Conteúdo
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="Foto João Silva" />
            </div>
        </div>
    )
}

export default Hero