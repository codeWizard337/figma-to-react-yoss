const TodayButton = () => {
    return (
        <div className='w-full sm:w-fit justify-center border border-[#ccc] rounded-md px-4 py-2 flex gap-2 items-center'>
            Today
            <svg width={20} height={20}><use href="#svg-arrow-down" /></svg>
        </div>
    )
}

export default TodayButton