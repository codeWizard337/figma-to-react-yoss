import AllTimeButton from "./AllTimeButton"
import PendingVisitsTable from "./PendingVisitsTable"
import SearchInput from "./SearchInput"


const PendingVisits = () => {
    return (
        <div className="flex flex-col gap-6 px-8">
            <div className="flex flex-row justify-between items-center">
                <AllTimeButton />
                <SearchInput />
            </div>
            <PendingVisitsTable />
        </div>
    )
}

export default PendingVisits