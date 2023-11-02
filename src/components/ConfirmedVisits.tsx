import ConfirmedVisitsTable from "./ConfirmedVisitsTable"
import AllTimeButton from "./AllTimeButton"
import MoreFiltersButton from "./MoreFiltersButton"
import SearchInput from "./SearchInput"

const ConfirmedVisits = () => {
    return (
        <div className="flex flex-col gap-6 px-8">
            <div className="flex flex-row justify-between">
                <div className="flex flow-row gap-2 items-center">
                    <AllTimeButton />
                    <MoreFiltersButton />
                </div>
                <SearchInput />
            </div>
            <ConfirmedVisitsTable />
        </div>
    )
}

export default ConfirmedVisits