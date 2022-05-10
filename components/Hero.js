import Typist from "react-typist";

export default function Hero() {
let icons = [
    {
      "id": 0,
      "image": "fa-github",
      "url": "https://github.com/carsonlenze/",
      "style": "socialicons"
    },
    {
      "id": 1,
      "image": "fa-instagram",
      "url": "https://www.instagram.com/carsonlenze/",
      "style": "socialicons"
    },
    {
      "id": 2,
      "image": "fa-discord",
      "url": "https://discordapp.com/users/404336524491227149/",
      "style": "socialicons"
    },
    {
      "id": 3,
      "image": "fa-twitter",
      "url": "https://www.twitter.com/carsonlenze/",
      "style": "socialicons"
    }
  ]

  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div className="container container-fluid text-center ">
          <h1 className="display-1">Carson Lenze</h1>
          <Typist className="lead"> | Programmer | Student | Maker | Hacker | Developer </Typist>
          <div className="p-5">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x socialicons`}
                />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#about"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
};