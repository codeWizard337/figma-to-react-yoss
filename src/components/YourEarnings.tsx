import AllTimeButton from "./AllTimeButton"
import MoreFiltersButton from "./MoreFiltersButton"
import SearchInput from "./SearchInput"
import YourEarningsTable from "./YourEarningsTable"

const YourEarnings = () => {
    return (
        <div className="flex flex-col gap-6 px-8">
            <div className="flex flex-row justify-between">
                <div className="flex flow-row gap-2 items-center">
                    <AllTimeButton />
                    <MoreFiltersButton />
                </div>
                <SearchInput />
            </div>
            <YourEarningsTable />
        </div>
    )
}

export default YourEarnings