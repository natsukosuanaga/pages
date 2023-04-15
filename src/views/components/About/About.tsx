import './About.css';
import about from '../../../img/about.jpg'

function About() {
    return (
        <section id="about" className="wrapper">
            <h2 className="section-title">About</h2>
            <div className="content">
                <img src={about} alt="テキストテキストテキスト" />
                <div className="text">
                    <h3 className="content-title">Natsuko Sunaga</h3>
                    <p>
                        美術大学を卒業後、システムエンジニアとしてキャリアをスタート。<br />
                        React.js Vue.js TypeScript Ruby on Rails などのプログラミング言語の経験があります。<br />
                    ユーザビリティを考慮したフロントエンド  の実装が得意です。<br /><br />
                    また、イラストが趣味でデザイナーとしての仕事もしています。<br />
                    お仕事のご依頼お待ちしています。
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;