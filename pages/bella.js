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
    axios.get('http://localhost:3000/api/test');
    
    return {
      props: {  },
    };
  };