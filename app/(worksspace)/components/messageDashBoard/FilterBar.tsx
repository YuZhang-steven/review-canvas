"use client"


import FilterBarBtn from './FilterBarBtn'

type FilterBarProps = {
    activeFilter: 'all' | 'Open' | 'Resolved'
    setActiveFilter: (filter: 'all' | 'Open' | 'Resolved') => void
}
export default function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {


    const filters = [
        { id: 'all', label: 'All' },
        { id: 'Open', label: 'Open' },
        { id: 'Resolved', label: 'Resolved' },
    ] as const

    return (
        <div id="filter-bar" className="flex flex-row gap-2 w-full shrink-0">
            {filters.map((filter) => (
                <FilterBarBtn
                    key={filter.id}
                    label={filter.label}
                    isActive={activeFilter === filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                />
            ))}
        </div>
    )
}
