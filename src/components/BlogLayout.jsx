import React, { useState, useEffect, useMemo, useRef } from 'react'

// ProgressBar Component
function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const maxScroll = scrollHeight - clientHeight
      const scrollPercentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, scrollPercentage)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'white',
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'black',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  )
}

// BlogHeader Component
function BlogHeader() {
  return (
    <header
      style={{
        position: 'sticky',
        top: '3px',
        width: '100%',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 900,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <a href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
        <img
          src="/dawnb.svg"
          alt="Dawn logo"
          style={{
            height: '40px',
            display: 'block'
          }}
        />
      </a>
    </header>
  )
}

// BlogFooter Component
function BlogFooter() {
  return (
    <footer
      style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
        overflow: 'hidden'
      }}
    >
      <img
        src="/denali.png"
        alt="Denali"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </footer>
  )
}

// TableOfContents Component
function TableOfContents({ content = '' }) {
  const [bottomOffset, setBottomOffset] = useState(5)
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const rafId = useRef(null)
  
  const MAX_TOC_WIDTH = 200
  const TOC_PADDING = 12
  const TOC_BORDER = 1
  const ACTUAL_TOC_WIDTH = MAX_TOC_WIDTH + (TOC_PADDING * 2) + (TOC_BORDER * 2)
  const TOC_MARGIN = 5
  const BUFFER = 5
  const CENTER_WIDTH = 691
  
  const checkSpace = () => {
    const viewportWidth = window.innerWidth
    const centerLeftEdge = (viewportWidth - CENTER_WIDTH) / 2
    const tocRightEdge = TOC_MARGIN + ACTUAL_TOC_WIDTH + TOC_MARGIN + BUFFER
    return tocRightEdge <= centerLeftEdge
  }
  
  const [hasEnoughSpace, setHasEnoughSpace] = useState(() => {
    if (typeof window === 'undefined') return false
    return checkSpace()
  })

  const headings = useMemo(() => {
    if (!content) return []
    
    const createSlug = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    
    return content.split('\n').reduce((extracted, line) => {
      const h2Match = line.match(/^##\s+(.+)$/)
      const h3Match = line.match(/^###\s+(.+)$/)
      
      if (h2Match) {
        extracted.push({ level: 2, text: h2Match[1].trim(), slug: createSlug(h2Match[1].trim()) })
      } else if (h3Match) {
        extracted.push({ level: 3, text: h3Match[1].trim(), slug: createSlug(h3Match[1].trim()) })
      }
      
      return extracted
    }, [])
  }, [content])

  useEffect(() => {
    const footer = document.querySelector('footer')
    
    const updatePosition = () => {
      if (!footer) {
        setBottomOffset(5)
        return
      }
      
      const rect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      if (rect.top < viewportHeight) {
        setBottomOffset(viewportHeight - rect.top + 5)
      } else {
        setBottomOffset(5)
      }
    }

    const scheduleUpdate = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          updatePosition()
          rafId.current = null
        })
      }
    }

    const handleResize = () => {
      scheduleUpdate()
      setHasEnoughSpace(checkSpace())
    }

    updatePosition()
    setHasEnoughSpace(checkSpace())

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', handleResize)

    const observer = footer ? new IntersectionObserver(scheduleUpdate, { threshold: 0, rootMargin: '0px' }) : null
    if (observer && footer) observer.observe(footer)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', handleResize)
      observer?.disconnect()
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current) {
            setIsVisible(false)
          }
          
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
      }
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, slug) => {
    e.preventDefault()
    const element = document.getElementById(slug)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (window.innerWidth < 768 || headings.length === 0 || !hasEnoughSpace) {
    return null
  }

  return (
    <nav style={{
      position: 'fixed',
      left: '5px',
      bottom: `${bottomOffset}px`,
      width: `${MAX_TOC_WIDTH}px`,
      maxWidth: `${MAX_TOC_WIDTH}px`,
      boxSizing: 'border-box',
      maxHeight: 'calc(100vh - 200px)',
      padding: '0.75rem',
      fontFamily: 'Calibri, sans-serif',
      fontSize: '12px',
      overflowY: 'auto',
      zIndex: 100,
      transition: 'bottom 0.05s linear, opacity 0.3s ease, transform 0.3s ease',
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
    }}>
      <div style={{
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        color: '#333'
      }}>
        Table of Contents
      </div>
      
      {headings.map((heading, index) => (
        <a
          key={index}
          href={`#${heading.slug}`}
          onClick={(e) => handleClick(e, heading.slug)}
          style={{
            display: 'block',
            paddingLeft: heading.level === 3 ? '0.75rem' : '0',
            marginBottom: '0.25rem',
            color: '#666',
            textDecoration: 'none',
            transition: 'color 0.2s',
            lineHeight: '1.3'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#667eea' }}
          onMouseLeave={(e) => { e.target.style.color = '#666' }}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  )
}

// Main BlogLayout Component
function BlogLayout({ children, markdownContent }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [showTOC, setShowTOC] = useState(false)
  
  const LOCKED_CENTER_WIDTH = 768 * 0.9

  useEffect(() => {
    document.documentElement.style.overflow = 'auto'
    document.documentElement.style.height = 'auto'
    document.body.style.overflow = 'auto'
    document.body.style.height = 'auto'
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.style.overflow = 'auto'
      rootElement.style.height = 'auto'
    }
    
    return () => {
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.height = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      const rootEl = document.getElementById('root')
      if (rootEl) {
        rootEl.style.overflow = 'hidden'
        rootEl.style.height = '100%'
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setShowTOC(width >= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <ProgressBar />
      <BlogHeader />
      
      <div style={{
        display: showTOC ? 'grid' : 'flex',
        gridTemplateColumns: showTOC ? '1fr auto 1fr' : 'none',
        justifyContent: 'center',
        flex: 1,
        position: 'relative',
        width: '100%'
      }}>
        {showTOC && (
          <div style={{ position: 'relative', minWidth: '200px' }}>
            <TableOfContents content={markdownContent} />
          </div>
        )}
        
        <div style={{ 
          width: isMobile ? '90%' : `${LOCKED_CENTER_WIDTH}px`,
          maxWidth: isMobile ? '90%' : `${LOCKED_CENTER_WIDTH}px`,
          margin: '0 auto'
        }}>
          {children}
        </div>
        
        {showTOC && <div style={{ minWidth: '200px' }} />}
      </div>
      
      <BlogFooter />
    </div>
  )
}

export default BlogLayout
