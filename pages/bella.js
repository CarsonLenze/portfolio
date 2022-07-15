export default function Home(forwarded) {

    return (
        <div>
            {forwarded}
            <img src="/bella/1.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/2.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/3.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/4.jpg" alt="Simply Easy Learning" ></img>
            <img src="/bella/5.jpg" alt="Simply Easy Learning" ></img>
        </div>

    )
}

export const getServerSideProps = async ({ req }) => {
    const forwarded = req.headers['x-forwarded-for'];

  
    return {
      props: { forwarded },
    };
  };