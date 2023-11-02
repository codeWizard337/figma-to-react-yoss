// import Tab from "@mui/material/Tab"
// import Tabs from "@mui/material/Tabs"
// import { Box } from "@mui/material"

import VisitsLabTabs from "./VisitsLabTabs"


const Visits = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 p-8'>
                <h1 className='text-4xl font-semibold'>Visits</h1>
                <p className='text-[#444] px-2'>Iorem ipsum</p>
            </div>
            <VisitsLabTabs />           
        </div>
    )
}
export default Visits