import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/router"

const AnimatedPage = ({ children }) => {
    const router = useRouter();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedPage