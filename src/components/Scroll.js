import react, {Component} from 'react'

const Scroll=(props)=>{
    const HEIGHT1=500;
    const HEIGHT2=10;
    return(
        <div style={{overflowY: 'scroll', border:'1px solid black', height: {HEIGHT1}}}>
            {props.children}
        </div>
    )
}

export default Scroll;