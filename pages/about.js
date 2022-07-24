import {useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';


// crear function about
 function About({data}) {
    // crear useEffect
    useEffect(() => {
        // alert('about');
        console.log('Hello useEffect');

    }, [])

    // jsx
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="viewport" content="First Website Next" />
                  {/* bootstrap */}
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link> */}

            </Head>
            {/* <Component {...pageProps} /> */}
            {/* {JSON.stringify(data)} */}

            <h1 className="text-center">NEXT APP - About</h1>
            {/* img */}
            <Image src="/bg.jpg" alt="Nancy" width='1200' height='900' layout='responsive'/>
            <p>This is a simple React App</p>

        {/* // button lance un alert */}
        <button onClick={() => alert('Hello')}>Click Me</button>

        {/* cars de bootsrap recorrer data */}
        
        <div className="container">
            <div className="row">
                {data.results.map((item, index) => {
                    return (
                        <div className="col-md-4 pt-3" key={index}>
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Species: {item.species}</p>
                                    <p className="card-text">Gender: {item.gender}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


       

        
        
        {/* <button type="button" className="btn btn-primary">Primary</button> */}
        </div>
    );

}

//function getServerSideProps
//getStaticProps
export async function getStaticProps(context) {
    //fetch
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    // console.log('data: ',data);




    console.log('getServerSideProps');
    return {
        props: {
            data
        }
    }
}



// exportar la function about
export default About;