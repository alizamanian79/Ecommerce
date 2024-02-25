import { StaticImageData } from "next/image"
import woman from "../../../../public/Categori/woman.png"
import man from "../../../../public/Categori/man.png"

interface dt {
    title?:string,
    description?:string,
    image:StaticImageData
}

const data = [
    {title:"انحصاری",description:"برای بانوان",image:""},
    {title:"",description:"",image:woman},
    {title:"انحصاری",description:"برای اقایان",image:""},
    {title:"",description:"",image:man}
]



export default data;