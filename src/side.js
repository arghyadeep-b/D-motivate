import './Side.css'

export default function Side(props) {
 return (
    <h2 className="title">{props.text}<span style={{color:"red"}}>{props.span}</span>
    </h2>
 );
}