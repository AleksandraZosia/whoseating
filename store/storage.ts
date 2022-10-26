export const appStorage = (key: string, value?: string | null) => {
  // If value is detected, set new or modify store
  if (typeof value !== "undefined" && value !== null) {
    if (typeof value === "object") {
      value = JSON.stringify(value)
    }
    window.localStorage?.setItem?.(key, value)
  }

  // No value supplied, return value
  if (typeof value === "undefined") {
    return localStorage?.getItem?.(key)
  }

  // Null specified, remove store
  if (value === null) {
    localStorage?.removeItem?.(key)
  }

  return null
}
