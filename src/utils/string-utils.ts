export const camelToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`)
}
