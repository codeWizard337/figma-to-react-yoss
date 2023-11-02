const SearchInput = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center">
                <svg width="20" height="20" ><use href="#svg-search" /></svg>
            </div>
            <input className="flex justify-start py-2.5 pl-[42px] pr-3.5 gap-2 w-[320px] h-[44px] rounded-lg border border-[#ccc] items-center text-[16px]" placeholder="Search" />
        </div>
    )
}

export default SearchInput