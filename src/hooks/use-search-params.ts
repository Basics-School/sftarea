
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useUpdateSearchParams() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSearchParam = (name: string, value: any) => {
    const params = new URLSearchParams(searchParams)
    if (Array.isArray(value)) {
      params.delete(name)
      value.forEach((v) => params.append(name, v))
    } else {
      params.set(name, value)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const removeSearchParam = (name: string, value?: any) => {
    const params = new URLSearchParams(searchParams)
    if (value && params.getAll(name).length > 1) {
      const values = params.getAll(name).filter(v => v !== value)
      params.delete(name)
      values.forEach(v => params.append(name, v))
    } else {
      params.delete(name)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return { setSearchParam, removeSearchParam, searchParams }
}
