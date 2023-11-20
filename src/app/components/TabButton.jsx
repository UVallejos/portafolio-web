import React from 'react'


{/**
Recibe tres propiedades: active (booleano que indica si la pestaña está activa),
selectTab (función para seleccionar la pestaña) y children (contenido del componente)
*/}
const TabButton = ( {active, selectTab, children} ) => {
  {/**Determina las clases CSS para el botón basado en si la pestaña está activa o no */}
    const buttonClasses = active 
    ? "text-white border-b border-blue-500" 
    : "text-[#ADB7BE]"
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 text-base  sm:text-xs lg:text-xl font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        
    </button>
  )
}

export default TabButton
