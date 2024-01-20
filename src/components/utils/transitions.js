export const fadeIn = () =>{
    return {
        hidden: {
            y: 80,
            opacity: 0,
            x:0,
            transition: {
            type: "tween",
            duration: 0.1,
            delay: 0.1,
            ease: [0.25,0.6,0.3,0.8]
            }
        },
        visible:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.3,
                delay:0.1,
                ease: [.25,0.25,0.25,0.75]
            }
        }
    }
  }
  
  export const fadeRight = () => {
    return {
      hidden: {
        x: 80,  // Cambiado de 'y' a 'x'
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.1,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      visible: {
        x: 0,  // Cambiado de 'y' a 'x'
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.1,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeLeft = () => {
    return {
      hidden: {
        x: -80,  // Cambiado de 'y' a '-x'
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.1,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      visible: {
        x: 0,  // Cambiado de 'y' a 'x'
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.1,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeUp = () => {
    return {
      hidden: {
        y: -80,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.8,  // Aumentado de 0.1 a 0.8
          delay: 0.1,
          ease: [0.45, 0.10, 0.3, 0.8],
        },
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,  // Aumentado de 1.3 a 1.5
          delay: 0.1,
          ease: [0.45, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeBottom = () => {
    return {
      hidden: {
        y: 80,  // Cambiado de -80 a 80 para que la animación venga de abajo hacia arriba
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.8,
          delay: 0.1,
          ease: [0.45, 0.10, 0.3, 0.8],
        },
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.1,
          ease: [0.45, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  
  export const fade = () => {
    return {
      hidden: {
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.5, // Aumenta la duración aquí
          delay: 0.1,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      visible: {
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5, // Aumenta la duración aquí
          delay: 0.1,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  

  export const fadeCompanies = (index) => {
    const duration = 0.5 + index * 0.5; // Ajusta la velocidad aquí
    return {
      hidden: { opacity: 0, x: -50 }, // Inicialmente fuera de la pantalla a la izquierda
      visible: {
        opacity: 1,
        x: 0, // Muestra en su posición original
        transition: {
          duration: duration,
        },
      },
    };
  };

  export const fadeTestimonies = (index) => {
    const duration = 0.5 + index * 0.4; // Ajusta la velocidad aquí
    return {
      hidden: { opacity: 0, y: 50 }, // Inicialmente fuera de la pantalla a la izquierda
      visible: {
        opacity: 1,
        y: 0, // Muestra en su posición original
        transition: {
          duration: duration,
        },
      },
    };
  };