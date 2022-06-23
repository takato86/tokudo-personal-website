

export function date2str(datetime: Date): string{
    const year = datetime.getFullYear().toString().padStart(4, '0');
    const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
    const date = datetime.getDate().toString().padStart(2, '0');
    return year + '.' + month + '.' + date;
}
