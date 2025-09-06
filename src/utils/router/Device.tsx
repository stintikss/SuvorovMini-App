import { useState, useEffect } from "react"

export function useDevice() {
    const [sizeDevice] = useState<boolean>(() => {
        return window.innerWidth >= 768 ? false : true
    });

    useEffect(() => {
        if (sizeDevice) {
            console.log('Phone user')
        } else {
            console.log('PC user')
        }
    }, [sizeDevice])

    return sizeDevice
}