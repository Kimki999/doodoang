import { motion } from "framer-motion";
import type { Children } from "../type/Children";

export default function fadeIn({children}:Children){


    return(
        <motion.div initial={{ opacity: 0,y: 0 }}
                        animate={{ opacity: 1,y: 0}}
                        transition={{ duration: 0.75 }}
        >
            {children}
        </motion.div>

    );
}