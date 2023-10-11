import Logo from '@/assets/apple-logo.svg';
import Arrow from '@/assets/arrow-down.svg';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import Image from 'next/image';
import { ItemMenu } from '@/components/ItemMenu';
import { Search } from '@/components/Search';



export function Header(){
    return(
        <header className='flex items-center w-full h-20 bg-primary-blue'>
           <div className='w-full max-w-[1246px] px-[20px] mx-auto'>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex items-center gap-14'>
                        <Image
                        width={30}
                        src={Logo}
                        alt='Logo'
                        />
                        <ul className='flex items-center gap-4'>
                            <li> <ItemMenu name='Para você!' /> </li>
                            <li> <ItemMenu name='Home' /> </li>
                            <li> <ItemMenu name='Sobre' /> </li>
                            <li> <ItemMenu name='Contato' /> </li>
                        </ul>
                    </div>
                    <Search/>
                </div>
           </div>
        </header>
    )
}