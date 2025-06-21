import { formatDateTime, formatRelativeDate } from "@/utils/format-dateTime";

type PostDateProps = {
    dateTime: string;
}
export function PostDate({ dateTime }: PostDateProps) {

    if(!dateTime){
        return null;
    }

    return (
        <time className="text-slate-600 text-sm/tight"
            dateTime={dateTime}
            title ={formatRelativeDate(dateTime)} 
            >
            {formatDateTime(dateTime)}
        </time>
    )
}