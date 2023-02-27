export const exercicio2 = (date: string): string => {
    const formattedDate = new Date(date).toLocaleDateString()
    return formattedDate
}