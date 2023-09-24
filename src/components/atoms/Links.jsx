import Link from 'next/link';
import '@/components/css/Links.css';
export default function Links(props) {
    return(<Link className='links' href={props.href}>{props.children}</Link>);
}