import { useContext } from "react"
import Store from "../store/store"

const HeaderIcon = ({ href, badge }) => {
    return (
        <div className='relative p-2'>
            <svg width={20} height={20}><use href={href} /></svg>
            <span className='bg-[#7F56D9] text-white rounded-full w-[14px] h-[14px] flex justify-center items-center text-[10px] absolute top-1 right-1'>{badge}</span>
        </div>
    )
}
const NavBar = () => {
    const { setState } = useContext(Store)
    const handleShowSideBar = () => {
        setState({ mobileSideBar: true })
    }
    return (
        <div className="flex justify-between items-center shadow-lg">
            <div onClick={handleShowSideBar} className="block sm:hidden p-2 cursor-pointer hover:scale-[1.05]">
                <svg width={20} height={20}><use href="#svg-side-three-bar" /></svg>
            </div>
            <div className='flex w-full gap-2 sm:gap-8 items-center justify-end'>
                <HeaderIcon href="#svg-message" badge={1} />
                <HeaderIcon href="#svg-bell" badge={1} />
                <div className='flex items-center gap-2'>
                    <img width={32} height={32} alt="avatar" className='rounded-full' src="avatar.png" />
                    <div className='hidden sm:flex flex-col justify-center text-center'>
                        <span className='font-semibold text-sm'>Olivia CGiver</span>
                        <span className='text-xs'>olivia@cae.com</span>
                    </div>
                </div >
                <div className='flex justify-center items-center w-[32px] h-[32px] rounded-full sm:w-[68px] sm:h-[68px] sm:rounded-md bg-[#7F56D9] '>
                    <svg width={20} height={20}><use href="#svg-signout" /></svg>
                </div >
            </div >
        </div>
    )
}
export default NavBar