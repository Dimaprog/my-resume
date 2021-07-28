import './Side.scss';
import boy from '../../images/superboy.jpg'

export default function Side (props) {
    return (
        <div className={"col left-side-wrapp " + (props.toggle ? "show" : "")}>
            <div className="side-left">
                <div className="image-with-name text-center">
                    <img className="boy" src={boy} alt="I am"/>
                    <h2>Moysyuk Dmytro</h2>
                    <h3>PHP Developer</h3>
                </div>
            </div>
        </div>
    )
}