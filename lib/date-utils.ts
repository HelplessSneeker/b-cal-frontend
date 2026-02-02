/**
 * Get the start of the week containing the given date (Monday-based)
 */
export function getStartOfWeek(date: Date): Date {
  const result = new Date(date)
  const day = result.getDay()
  // Adjust for Monday start (0 = Sunday, so Monday = 1)
  const diff = day === 0 ? -6 : 1 - day
  result.setDate(result.getDate() + diff)
  result.setHours(0, 0, 0, 0)
  return result
}

/**
 * Get the end of the week containing the given date (Sunday)
 */
export function getEndOfWeek(date: Date): Date {
  const start = getStartOfWeek(date)
  const result = new Date(start)
  result.setDate(result.getDate() + 6)
  result.setHours(23, 59, 59, 999)
  return result
}

/**
 * Get the start of the month containing the given date
 */
export function getStartOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Get the end of the month containing the given date
 */
export function getEndOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
}
