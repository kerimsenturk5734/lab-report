
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

    getPreOfJson : (json) => {
        return <pre>{json}</pre>
    }
}