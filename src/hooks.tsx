import {useState, useEffect} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

const sinify : Function =  (scale : number) : number => Math.sin(scale * Math.PI)

export const useAnimatedScale : Function = () => {
    const [scale, setScale] : [number, Function] = useState(0)
    const [animated, setAnimated] : [boolean, Function] = useState(false)
    return {
        sf : Math.sin(scale), 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval : any = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}