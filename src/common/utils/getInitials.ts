export const getInitials = (name?: string): string => {
    return name?.match(/(^\S\S?|\s\S)?/g)?.map(v => v.trim()).join("").match(/(^\S|\S$)?/g)?.join("").toLocaleUpperCase() ?? "";
}