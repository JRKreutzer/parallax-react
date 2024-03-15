import { useRef } from "react";
import { services } from "../../constants";
import "./services.scss"
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div ref={ref} className="services" variants={variants} initial="initial" animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Meu foco é em ajudar sua marca crescer<br/> e seguir adiante
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="Pessoas trabalhando em um escritório" />
                    <h1>Ideias <motion.b whileHover={{color: "orange"}}> Únicas</motion.b></h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color: "orange"}}>Para O Seu</motion.b> Negócio</h1>
                    <button>O que fazemos?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                {services.map((item) => (
                    <motion.div key={item.id} className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <h2>{item.title}</h2>
                        <p>{item.descricao}</p>
                        <button>Ir</button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services