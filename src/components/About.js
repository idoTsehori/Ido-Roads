import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="me" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Hey there!</h3>
          <p>
            I'm Ido Tsehori, I am a passionate full-stack and front-end developer based in Israel
            When I'm not coding, you can find me producing music or playing the guitar
          </p>
          <p>This is one of my first React.js projects, and I hope you enjoy it!</p>
          <a href="mailto:ido.tsehori@gmail.com" class="btn">
            send me an email
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
