<div className="relative max-w-lg">
    <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search posts..."
        className="flex item-start w-full rounded-full border border-gray-300 bg-gray-100	 px-4 py-2 text-gray-900 focus:border-red-100 focus:ring-red-100 dark:border-gray-900 dark:bg-gray-500/20 dark:border-gray-500 dark:text-gray-100"
    />
    <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
</div>