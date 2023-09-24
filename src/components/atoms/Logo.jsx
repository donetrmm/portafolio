import Image from "next/image"
export default function Logo(props) {
    return <Image alt="Logo" src={props.src}/>
}