export default function About() {

  return (
    <div id="about" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src="https://hashirshoaeb.com/home/static/media/hashirshoaeb.32f6b574.png"
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
          <div className={`col-lg-7`}>
            <h1 className="display-4 mb-5 text-center">About Me</h1>
            <p className="lead text-center">My name is Carson Lenze. I'm a sophomore in high school at Hamilton Heights High School and I'm planning on getting a degree in Computer Science at Purdue University. I'm currently a part of a Student organization called Business Professionals of America where I showed my skills in Computer science by Competing and placing first in Python Programing at the annual state conference. In my free time, I like working on discord bots.</p>
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://docs.google.com/document/d/1Bcx0xo2BbQHloT45BF9hGjLc5R6W71rOSJbbeuv_gqM/edit?usp=sharing"
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