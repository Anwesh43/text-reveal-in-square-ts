import React, { MouseEventHandler } from 'react'
import {useStyle} from './hooks'
interface TextBlockProps {
    w : number, 
    onClick : MouseEventHandler<HTMLDivElement>,
    h : number,
    scale : number, 
    text : string
}

interface BlockStyleProps {
    blockStyle : Function
}

const TextBlock : React.FC<TextBlockProps> = (props : TextBlockProps) => {
    const {blockStyle} : BlockStyleProps  = useStyle(props.w, props.h, props.scale)
    //console.log(props.scale)
    //console.log("FONT", blockStyle().fontSize)
    return (
        <div style = {blockStyle()} onClick = {props.onClick}>
            {props.text}
        </div>
    )
}

export default TextBlock