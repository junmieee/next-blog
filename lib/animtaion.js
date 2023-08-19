export const defaultEasing = [0.6, -0.05, 0.01, 0.99];


export const popUp = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        opacity: 1,
        scale: 1,
    },
    tap: {
        scale: 0.9
    },
    transition: {
        type: 'spring',
        stiffness: 400, damping: 17
    },
}

// export const popUpY = {
//     initial: {
//         opacity: 0,
//         transition: { duration: 0.6, ease: defaultEasing },
//         willChange: 'opacity',
//     },
//     animate: {
//         opacity: 1,
//         transition: { duration: 0.6, ease: defaultEasing },
//         willChange: 'opacity',
//     },
//     exit: {
//         opacity: 0,
//         transition: { duration: 0.6, ease: defaultEasing },
//         willChange: 'opacity',
//     },
// };

export const staggerHalf = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
};

export const fadeIn = {
    initial: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity',
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity',
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity',
    },
};


export const popUpY = {
    initial: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
};

export const FadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0, staggerChildren: 0.1 },
    },
}




export const fadeInScale = {
    initial: {
        opacity: 0,
        scale: 0.85,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
    exit: {
        opacity: 0,
        scale: 0.85,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: 'opacity, transform',
    },
};