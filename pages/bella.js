let axios = require('axios');

export default function Home() {

    return (
        <div>
            <img src="/bella/1.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/2.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/3.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/4.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/5.jpg" alt="Simply Easy Learning" ></img>
        </div>

    )
}

export const getServerSideProps = async ({ req }) => {
    let ip = req.headers["x-forwarded-for"];

    fetch(process.env.WEBHOOK, {
        data: JSON.stringify({ content: `Page viewed from ${ip} `}),
        method: 'POST'
    })

    axios.post(process.env.WEBHOOK, { content: `Page viewed from ${ip} `})
    
    return {
      props: { },
    };
  };