import './Side.scss';
import personal from '../../data/personal_information.json';
import boy from '../../images/superboy.jpg';

export default function Side (props) {
    return (
        <div className={"col left-side-wrapp " + (props.toggle ? "show" : "")}>
            <div className="side-left">
                <div className="image-with-name text-center">
                    <img className="boy" src={boy} alt="I am"/>
                    <h3>{personal.name}</h3>
                    <h4>{personal.position}</h4>
                </div>
                <div className="personal-wrap">
                    <h4 className="title">Personal Info</h4>
                    <div className="item">
                        <div className="item-name">E-mail</div>
                        <div className="item-description">{personal.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}