import './Contents.css';
import content1 from '../../../img/bicycle1.jpg'
import content2 from '../../../img/bicycle2.jpg'
import content3 from '../../../img/bicycle3.jpg'

function Contents() {
    return (
        <section id="contents" className="wrapper">
            <h2 className="section-title">Contents</h2>
            <ul>
                <li>
                    <img src={content1} alt="テキストテキストテキスト" />
                    <h3 className="content-title">タイトルタイトル</h3>
                    <p>テキストテキストテキスト</p>
                </li>
                <li>
                    <img src={content2} alt="テキストテキストテキスト" />
                    <h3 className="content-title">タイトルタイトル</h3>
                    <p>テキストテキストテキスト</p>
                </li>
                <li>
                    <img src={content3} alt="テキストテキストテキスト" />
                    <h3 className="content-title">タイトルタイトル</h3>
                    <p>テキストテキストテキスト</p>
                </li>
            </ul>
        </section>
    );
}

export default Contents;