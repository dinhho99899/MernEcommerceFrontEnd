export const getUniqueValues = (items, value) => {
  let unique = items.map((item) => item[value])
  return ['all', ...new Set(unique)]
}

export const panigate = (items) => {
  let productsPerPage = 12
  let numberOfPage = Math.ceil(items.length / productsPerPage)
  let newItems = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * productsPerPage
    return items.slice(start, start + productsPerPage)
  })
  return newItems
}
const checkFuc = () => {}
