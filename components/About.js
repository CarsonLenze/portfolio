import Image from 'next/image';

export function About() {

  return (
    <div id="about" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
            <div className="col-5 d-none d-lg-block align-self-center">
              <Image
                className="border border-secondary rounded-circle"
                src="/me.png"
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
          <div className={`col-lg-7`}>
            <h1 className="display-4 mb-5 text-center">About Me</h1>
            <p className="lead text-center">My name is Carson Lenze. I&apos;m a sophomore in high school and I&apos;m planning on getting a degree in Computer Science at Purdue University. I&apos;m currently a part of a Student organization called Business Professionals of America and I am working towards becoming President of our region. In my free time, I like working on discord bots and making websites just like this one.</p>
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://docs.google.com/document/d/13QVpA-l3jsT0me99_IdyWT8-KwDyaM5h/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};