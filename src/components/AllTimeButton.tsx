const AllTimeButton = () => {
    return (
        <div className="flex justify-center py-2.5 px-4 gap-2 rounded-lg border text-[14px] h-10 font-semibold border-[#ccc] items-center">
            All time
            <svg width={10} height={10}><use href="#svg-close" /></svg>
        </div>
    )
}

export default AllTimeButton