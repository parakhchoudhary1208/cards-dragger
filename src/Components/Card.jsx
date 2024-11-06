import React from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";


function Card({data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 600, bounceDamping: 30}} className="relative w-60 h-72 rounded-[32px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className="mt-4 font-semibold text-sm">
                {data.desc}
            </p>
            <div className="footer absolute left-0 w-full bottom-0">
                <div className="mb-3 flex items-center justify-between px-6">
                    <h5>{data.fileSize}</h5>
                    {
                        data.isDownload ?
                        <IoIosCloseCircleOutline /> : <LuDownload />

                    }
                </div>
                <div className={`tag ${data.isDownload ? "bg-sky-600/90" : "bg-green-600/90"} py-3 text-center cursor-pointer`}>
                    <h3 className="font-semibold text-sm">
                        {
                            data.isDownload ?
                            "Pause" : "Download Now"
                        }
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Card