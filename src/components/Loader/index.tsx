import { useAuthCtx } from "@/context/Auth"
import { Triangle } from "react-loader-spinner"
import { AnimatePresence, motion } from "framer-motion"

const Loader = () => {
    const { isLoggingIn, isSigningUp } = useAuthCtx()

    return (
        <AnimatePresence>
            {
                isLoggingIn || isSigningUp
                    ?
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 1 }
                        }}
                        style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "rgb(17, 17, 17, 0.700)",
                            width: "100dvw",
                            height: "100dvh",
                        }}>
                        <motion.i
                            initial={{
                                opacity: 0,
                                y: 60
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, type: "spring", stiffness: 400 }
                            }}
                        >
                            <Triangle
                                height="90"
                                width="90"
                                color="#a392fa"
                                ariaLabel="revolving-dot-loading"
                                wrapperClass=""
                            />
                        </motion.i>
                    </motion.div>
                    :
                    null
            }

        </AnimatePresence>
    )
}

export default Loader
