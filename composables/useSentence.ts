export const useSentence = function (items: string[]) {
  if (items.length === 1) { return items[0] } else if (items.length === 2) { return items.join(' et ') } else { return `${items.slice(0, -1).join(', ')} et ${items.slice(-1)}` }
}
