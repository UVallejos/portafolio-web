import React from 'react'
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};


{/**
Recibe tres propiedades: active (booleano que indica si la pestaña está activa),
selectTab (función para seleccionar la pestaña) y children (contenido del componente)
*/}
const TabButton = ( {active, selectTab, children} ) => {
  
  {/* Si 'active' es verdadero, la clase "text-white" se aplica,
      de lo contrario se aplica  "text-[#ADB7BE]*/}
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]"

  return (
    <button onClick={selectTab}>
        <p className={`font-Poppins mr-3 text-base sm:text-xs lg:text-xl font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        {/* Animación para la transicióm entre Botones */}
        <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-third-500 mt-2 mr-3"
      ></motion.div>
    </button>
  )
}

export default TabButton
