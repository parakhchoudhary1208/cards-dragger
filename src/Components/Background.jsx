import React from 'react'

function Background() {
    return (
        <>
            <div className="fixed w-full h-full z-[2]">
                <div className="flex justify-center text-zinc-600 text-xl w-full py-12 font-bold">Documents.</div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter leading-none text-[12vw] font-semibold text-zinc-900">Docs.</h1>
            </div>
        </>
    )
}

export default Background