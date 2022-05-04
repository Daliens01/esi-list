import Error from "next/error"

export default function View({task, error}){
    if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
    
    return(
        <div>
              
               <iframe src={task.link} 
               style={{ 'margin' : 0,
               'border': 'none',     /* Reset default border */
               'height': '770px',        /* Viewport-relative units */
               'width': '100vw'}
               } />
        </div>
    )
}

export async function getServerSideProps({query: {id}}){
   const res = await fetch(`http://localhost:3000/api/task/${id}`)
    if(res.status === 200){
        const task = await res.json()
        return(
            {
                props: {task}
            }
        )
    }
    return(
        {
            props: {
                error:{
                    statusCode: res.status,
                    statusText: "Identificador invalido"
                }
            }
        }
    )
}