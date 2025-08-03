import Image from 'next/image';
import BarNavigate from './BarNavigate'

export default function Start() {

    return(

        <div className="h-screen w-screen flex itens-center flex-col bg-[#51ABFF]">
            
            <BarNavigate />

            <div className='flex flex-col items-center justify-center m-14'>

                <h1 className='text-center text-2xl md:text-4xl text-[#163651]'>Proteja o que importa com a</h1>
                <h1 className='text-center text-2xl md:text-4xl text-[#163651]'>HomeSafe</h1>

                <h1 className='text-center text-xl md:text-2xl text-white mt-4'>Segurança residencial inteligente ao seu alcance</h1>

                <span className="text-sm md:text-base md: mt-12 px-7 py-4 rounded-xl bg-[#163651] text-white">Garanta Agora</span>

                <Image  

                    className='mt-17 ms:h-10'
                    src="/home3d.png"
                    alt='home3d'
                    width={300}
                    height={300}

                />

            </div>

        </div>

    );

}