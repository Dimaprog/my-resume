import './Side.scss';

export default function Side (props) {
    return (
        <div className={"col left-side-wrapp " + (props.toggle ? "show" : "")}>
            <div className="side-left">
                Side Left
            </div>
        </div>
    )
}