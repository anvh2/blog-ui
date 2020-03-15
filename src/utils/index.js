export const convertToDate = (time) => {
    let date = new Date(Number(time)).toDateString()
    const idx = date.indexOf(" ") + 1
    return date.substr(idx)
}

export const estimateReadTime = (content) => {
    return 7
}