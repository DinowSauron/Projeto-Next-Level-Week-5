//Consumindo API (1:00:00, 2°ep)


// SPA 
// (não indexavel usa javascript do browser) 
/*
import {useEffect} from "react"
export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3333/episodes")
      .then(response => response.json())
      .then(data => console.log(data))
  }, []) 
  return (<h1>Index</h1>);
}
*/



// SSR
// Alterações em tempo real, sempre atualizando
/*
export default function Home(props) {
  console.log(props.episodes)

  return (
    <h1>Index</h1>
  );
}


export async function getServerSideProps(){

  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return { // precisa retornar o props
    props: {
      episodes: data,
    }
  }
}
*/


//SSG
// cria um cache destes dados
// pagina semi-estatica.
//todos os acessos terão o mesmo resultado!


// <p>{JSON.stringify(props.episodes)}</p>
export default function Home(props) {
  console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}


export async function getStaticProps(){

  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return { // precisa retornar o props
    props: {
      episodes: data,
    },
    // timer do cache, (8hrs)
    revalidate: 60*60*8,
  }
}