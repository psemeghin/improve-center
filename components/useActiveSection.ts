import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] || 'home')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const options: IntersectionObserverInit = {
      root: null,
      // entra como ativa quando ~40% da seção aparece; sai com 60%
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) setActiveId(id)
        }
      })
    }, options)

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids.join('|')])

  return activeId
}
