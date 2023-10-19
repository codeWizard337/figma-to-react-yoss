import { useContext } from "react"
import Store from "../store/store"

const SideBarItem = ({ title, href, active, badge, small }) => {
    return (
        <div className={`${active ? "bg-[#7F56D9]" : ""} rounded-[6px] py-2 px-3 ${small ? "h-[40px]" : "h-[79px]"} flex w-full justify-between items-center `}>
            <div className=' flex gap-3 items-center'>
                <svg width="20" height="21"><use href={href} /></svg>
                <span className='text-white text-[16px]'>{title}</span>
            </div>
            {badge && <span className='bg-white rounded-full w-6 h-6 flex justify-center items-center text-[#7F56D9] text-xs'>{badge}</span>}
        </div>
    )
}
const SideBar = () => {
    return (
        <div className='hidden sm:flex min-w-[180px] bg-[#6941C6] gap-2 w-[354px] p-4 h-screen overflow-y-hidden flex-col justify-between'>
            <div>
                <div className='flex flex-col h-[170px] justify-center items-center'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="26.7564" height="26.7564" rx="13.3333" transform="matrix(0.965916 -0.258855 -0.258855 0.965916 13.4799 13.4802)" fill="#9E77ED" />
                        <rect width="26.7564" height="26.7564" rx="13.3333" transform="matrix(0.965916 -0.258855 -0.258855 0.965916 6.9259 6.9259)" fill="white" />
                    </svg>
                    <span className='font-semibold text-white text-xl'>Logo</span>
                </div>
                <div>
                    <SideBarItem title="Overview" href="#svg-overview" active />
                    <SideBarItem title="Visits" href="#svg-visits" badge={4} />
                    <SideBarItem title="Earnings" href="#svg-earnings" />
                    <SideBarItem title="Reviews" href="#svg-reviews" />
                </div>
            </div>
            <div>
                <SideBarItem title="Support" href="#svg-support" small />
                <SideBarItem title="Settings" href="#svg-settings" small />
            </div>
        </div>
    )
}

export const MobileSideBar = () => {
    const { state, setState } = useContext(Store)
    const handleMobileSideBarBackClick = () => {
        setState({ mobileSideBar: false })
    }
    return (
        <div className={`fixed ${state.mobileSideBar ? "left-0":"-left-[100%]"} top-0 w-full transition-all ease-in-out duration-500`}>
            <div onClick={handleMobileSideBarBackClick} className="w-full h-screen cursor-pointer"></div>
            <div className='absolute left-0 top-0 flex bg-[#6941C6] gap-2 w-8/12 min-w-[200px] max-w-[350px] p-4 h-screen overflow-y-hidden flex-col justify-between z-10'>
                <div>
                    <div className='flex flex-col h-[170px] justify-center items-center'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26.7564" height="26.7564" rx="13.3333" transform="matrix(0.965916 -0.258855 -0.258855 0.965916 13.4799 13.4802)" fill="#9E77ED" />
                            <rect width="26.7564" height="26.7564" rx="13.3333" transform="matrix(0.965916 -0.258855 -0.258855 0.965916 6.9259 6.9259)" fill="white" />
                        </svg>
                        <span className='font-semibold text-white text-xl'>Logo</span>
                    </div>
                    <div>
                        <SideBarItem title="Overview" href="#svg-overview" active />
                        <SideBarItem title="Visits" href="#svg-visits" badge={4} />
                        <SideBarItem title="Earnings" href="#svg-earnings" />
                        <SideBarItem title="Reviews" href="#svg-reviews" />
                    </div>
                </div>
                <div>
                    <SideBarItem title="Support" href="#svg-support" small />
                    <SideBarItem title="Settings" href="#svg-settings" small />
                </div>
            </div>
        </div>
    )
}
export default SideBar