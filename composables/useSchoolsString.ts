export const useSchoolsString = function (schools: string[]) {
  if (schools.length === 1)
    return schools[0]
  else if (schools.length === 2)
    return schools.join(' et ')
  else
    return `${schools.slice(0, -1).join(', ')} et ${schools.slice(-1)}`
}
