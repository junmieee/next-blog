
const MDXComponent = ({ title, date, children }) => {
    return (
        <div className="w-full flex flex-col prose dark:prose-invert mt-10 text-gray-900 dark:text-gray-100">
            <h1 className=" text-gray-900 dark:text-gray-100">{title}</h1>
            {/* {date && (
                <span className="text-sm font-light mb-5">{usDateString(date)}</span>
            )} */}
            {children}
        </div>
    );
};

export default MDXComponent;