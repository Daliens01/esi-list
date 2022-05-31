import Error from "next/error"

export default function View({task, error}){
    const contador = task.link;
    if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
    if (contador.length >= 100){
        // Retorna la lista seleccionada de excel guardadas en Google Drive dentro de un iframe
    return(
        <div> 
            <iframe src={task.link} style={{ 'margin' : 0,'border': 'none', 'height': '770px', 'width': '100vw'} } />
        </div>
    )}else{ // Si la lista no coincide con el patron de un enlace de excel en Google Drive, te devuelve el siguiente mensaje
        return(
            <div style={{'margin': '0 auto', 'text-align':'center'}} >
                  <h1>El link agregado no coincide con un link de Google Drive
                  </h1><hr/><i>Actualiza el dato con uno correcto</i><br/>
                  <img  alt="none" src="https://eztoro.com/static/svg/no_data.svg"/>
          </div>
        )
    }
}

export async function getServerSideProps({query: {id}}){
   const res = await fetch(`https://api-daliens01.vercel.app/api/options/${id}`)
    if(res.status === 200){
        const task = await res.json();
        return(  {props: {task}})
    }return({ props: {  error:{statusCode: res.status, statusText: "Identificador invalido"}}})
}