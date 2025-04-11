import React from "react"

interface PageProps {
  params : {
    link?:string | string [];
  }
}

function reconstructUrl({url} : {url : string[]}){
  const decodedComponents = url.map((component) => decodeURIComponent(component))
  return decodedComponents.join('/');

}

const page = async ({params} : PageProps) => {

  const awaitedParams = await params
  if(!awaitedParams?.link){
    return <div>Erreur: Aucun lien fourni</div>
  }
const linkArray = Array.isArray(awaitedParams.link) ? awaitedParams.link : [awaitedParams.link ]

const decodedLink = reconstructUrl({url : linkArray})

  return (
    <div>
      {decodedLink}
    </div>
  )
}

export default page