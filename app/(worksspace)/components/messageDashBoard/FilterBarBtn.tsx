"use client"

interface FilterBarBtnProps {
    label: string
    isActive: boolean
    onClick: () => void
}

export default function FilterBarBtn({ label, isActive, onClick }: FilterBarBtnProps) {
    return (
        <button
            onClick={onClick}
            className={`
                flex-1 px-3 py-2 
                cursor-pointer
                text-xs font-medium 
                rounded-lg 
                transition-all duration-200 
                ${isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
            `}
        >
            {label}
        </button>
    )
}
