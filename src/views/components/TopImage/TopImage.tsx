import './TopImage.css';
import mainvisual from "../../../img/mainvisual.jpg"

function TopImage() {
    return (
        <div className="main-visual">
            <img src={mainvisual} alt="テキストテキストテキスト" />
        </div>
    );
}

export default TopImage;