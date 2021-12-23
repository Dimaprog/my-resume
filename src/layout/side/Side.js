import './Side.scss';
import person from '../../data/personal_information.json';
import boy from '../../images/superboy.jpg';

export default function Side (props) {
    return (
        <div className={"col left-side-wrap " + (props.toggle ? "show" : "")}>
            <div className="side-left">
                <div className="image-with-name text-center">
                    <img className="boy" src={boy} alt="I am"/>
                    <h3>{person.personal_info.name}</h3>
                    <h4>{person.personal_info.position}</h4>
                </div>
                <div className="item-wrap">
                    <h4 className="title">Personal Info</h4>
                    <div className="item">
                        <div className="item-name">E-mail</div>
                        <div className="item-description">{person.personal_info.email}</div>
                    </div>
                </div>
                <div className="item-wrap">
                    <h4 className="title">Education Info</h4>
                    <div className="item">
                        <div className="item-name">Dates of studying</div>
                        <div className="item-description">{person.education.dates_of_studying}</div>
                    </div>
                    <div className="item">
                        <div className="item-name">Name of institution</div>
                        <div className="item-description">{person.education.name}</div>
                    </div>
                    <div className="item">
                        <div className="item-name">Degree and major</div>
                        <div className="item-description">{person.education.degree}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}