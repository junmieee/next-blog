export default function Tag({ tag, onClick, selected }) {

    const tagClass = `text-neutral-100 rounded-lg px-2 transition-colors py-0.5 ${selected
        ? 'bg-gray-500 dark:ring-0 dark:ring-slate-200 dark:ring-offset-2 ring-gray-600 ring-2 ring-offset-2'
        : 'bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-500 	'
        } cursor-pointer`;

    return (
        <div
            className={tagClass}
            onClick={() => onClick(tag)}
        >
            {tag}
        </div>
    );
}