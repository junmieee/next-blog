

export default function IconWithText({ Icon, size = 14, text }) {
    return (
        <div className='flex items-center text-slate-500 dark:text-gray-400 text-base pt-2'>
            <Icon width={size} height={size} />
            <span>{text}</span>
        </div>
    );
}