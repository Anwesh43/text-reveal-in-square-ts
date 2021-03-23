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

export const useDimension : Function = () => {
    const [w, setW] : [number, Function] = useState(window.innerWidth)
    const [h, setH] : [number, Function] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    }) 
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / 10
    return {
        blockStyle() : Object {
            return {
                display : 'flex',
                width : `${size}px`,
                height: `${size}px`,
                position: 'absolute',
                left : `${w / 2 - size / 2}px`,
                top : `${h / 2 - size / 2}px`,
                justifyContent: 'center',
                alignItems: 'center',
                background: 'orange',
                color : 'white'
                fontSize : `${(size * scale) / 3}`,
            }
        }
    }
}