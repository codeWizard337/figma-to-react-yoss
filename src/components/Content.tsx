
import AppointmentsTable from './AppointmentsTable'
import Portal from './Portal'
const Content = () => {
    return (
        <div className='p-8'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-semibold text-center'>Welcome Back <span className='text-[#7F56D9]'>Olivia</span></h1>
                    <p className='text-[#444] px-2 text-center'>Your current account summary and activity.</p>
                </div>
                <div className='w-full sm:w-fit justify-center border border-[#ccc] rounded-md px-4 py-2 flex gap-2 items-center'>
                    Today
                    <svg width={20} height={20}><use href="#svg-arrow-down" /></svg>
                </div>
            </div>
            <div className='flex flex-col gap-4 min-w-[200px] max-w-[725px] mx-auto py-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <Portal title="Total Earnings" href="#svg-coins" content="35 $" />
                    <Portal title="Appointments" href="#svg-appointments" content="1/4" />
                </div>
                <div className='w-full border border-[#ccc] rounded-md'>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex flex-col gap-2'>
                            <div className={`flex flex-col sm:flex-row gap-2 items-center w-fit`}>
                                <b>Appointments</b>
                                <span className='border boder-[#ccc] text-[#444] rounded-md px-2 py-1 text-xs'>4 appointments</span>
                            </div>
                            <p className='text-sm text-[#444]'>Keep track of your appointments  and their dates.</p>
                        </div>
                        <span className='text-[#7F56D9] underline whitespace-nowrap'>See all</span>
                    </div>
                    <AppointmentsTable />
                </div>
            </div>
        </div>
    )
}
export default Content