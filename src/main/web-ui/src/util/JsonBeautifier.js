
export const jsonBeautifier = {
    beautifyJson : (o : any) : string => {
        let beautyString = ''

        for (const key in o) {
            if (o.hasOwnProperty(key)) {
                beautyString += `${key} : ${JSON.stringify(o[key])}\n`;
            }
        }

        return beautyString;
    },
    beautifyLocalItem : (item):string => {
        return JSON.stringify(item, null, 2);
    },
    beautifyDate: (date:Date) : string => {
        const inputDate = new Date(date.toString());

        const dayOptions = { day: '2-digit' };
        const monthOptions = { month: 'short' };
        const yearOptions = { year: '2-digit' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

        return `${inputDate.toLocaleString('en-US', dayOptions)} 
            ${inputDate.toLocaleString('en-US', monthOptions)} 
            ${inputDate.toLocaleString('en-US', yearOptions)} 
            ${inputDate.toLocaleString('en-US', timeOptions)}`;
    },

    getPreOfJson : (json) => {
        return <pre>{json}</pre>
    }
}