import { PortaType } from "../@types/types"

const Portal = ({ title, href, content }: PortaType) => {
    return (
        <div className='flex flex-col gap-4 p-6 border border-[#ccc] rounded-md'>
            <div className="flex justify-between items-center">
                <div className='flex gap-2 items-center'>
                    <svg width={22} height={22}><use href={href} /></svg>
                    {title}
                </div>
                <svg width={24} height={24}><use href="#svg-arrow-right" /></svg>
            </div>
            <p className='text-3xl font-semibold px-2'>{content}</p>
        </div>
    )
}
export default Portal