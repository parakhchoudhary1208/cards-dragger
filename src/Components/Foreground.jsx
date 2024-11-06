import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tellus turpis",
            fileSize: "0.4Mb",
            isDownload: false,
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tellus turpis",
            fileSize: "2Mb",
            isDownload: false,
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tellus turpis",
            fileSize: "3.3Mb",
            isDownload: true,
        },
    ]
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] h-full w-full flex p-4 flex-wrap gap-4">
            {
                data.map((item, index) => (
                    <Card data={item} key={index} reference={ref}/>
                ))
            }
        </div>
    )
}

export default Foreground