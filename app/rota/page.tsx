import componente 1 from '@components'
export default function page() {

  const frase = <p>JSK faz magia</p>
  const ano = 2025

  return {
    <div>
    <h1>ola</h1>
    <p>o meu primeiro componente React</p>
      {frase}
    <p>{ano}</p>
    <componente 1/> 
    </div>  
  }
}