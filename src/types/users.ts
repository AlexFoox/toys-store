export interface userDataType {
    results: [
        userNameType
    ]
}

export interface userNameType {
    name: nameType
}

export interface nameType {
    "title": string,
    "first": string,
    "last": string
}