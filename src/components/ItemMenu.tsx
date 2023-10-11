import Image from "next/image";
import Arrow from '@/assets/arrow-down.svg';
import { types } from "util";

type Props = {
    name: string
}

export function ItemMenu({name}:Props){
    
    return(
        <button className='flex items-center gap-3'>
             <span className='font-bold text-white'>{name}</span>
             <Image src={Arrow} alt='Arrow drop-down' />
         </button>
    )
}