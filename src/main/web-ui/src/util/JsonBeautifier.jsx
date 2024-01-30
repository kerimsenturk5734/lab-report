export const beautifyJson = (o : any) : string => {
    let beautyString = ''

    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            beautyString += `${key} : ${JSON.stringify(o[key])}\n`;
        }
    }

    return beautyString;
}

export function getPreOfJson(json){
    return <pre>{json}</pre>
}