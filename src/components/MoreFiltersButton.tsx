const MoreFiltersButton = () => {
    return (
        <div className="flex justify-center py-2.5 px-4 gap-2 rounded-lg border text-[14px] h-10 font-semibold border-[#ccc] items-center">
            <svg width={15} height={10}><use href="#svg-filter-lines" /></svg>
            More filters
        </div>
    )
}

export default MoreFiltersButton