import Image from "next/image"
import IconSearch from '@/assets/icon-search.svg';

export function Search(){
    return(
        <div className="flex items-center gap-3">
            <Image src={IconSearch} alt="Search"/>
            <input type="text" className="bg-transparent outline-none text-white placeholder:text-white" placeholder="Buscar" />
        </div>
    )
}