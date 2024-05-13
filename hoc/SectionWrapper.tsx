import { motion } from 'framer-motion'

import { staggerContainer } from '../utils/motion'

const StarWrapper = (Component: React.ElementType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={` relative z-0 w-full`}
      >
        {/* <span className='hash-span' id={idName}>
          &nbsp;
        </span> */}

        <Component />
      </motion.section>
    )
  }

export default StarWrapper
