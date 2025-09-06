import { useState, useEffect } from "react"

export function useDevice() {
    const [sizeDevice] = useState<boolean>(() => {
        return window.innerWidth >= 768 ? false : true
    });

    useEffect(() => {
        if (sizeDevice) {
            console.log('PC user')
        } else {
            console.log('Phone user')
        }
    }, [sizeDevice])

    return sizeDevice
}