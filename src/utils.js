const getHeading = (idx) => {
    return `Task ${idx + 1}`;
}

const getPath = (idx) => {
    return `/task${idx + 1}`;
}

const getKey = (idx) => {
    return `task${idx + 1}`
}

export {
    getHeading,
    getPath,
    getKey
}