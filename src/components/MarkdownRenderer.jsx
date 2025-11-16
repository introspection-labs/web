import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function MarkdownRenderer({ content }) {
  return (
    <div
      style={{
        fontFamily: 'Calibri, sans-serif',
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#333'
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, children, ...props }) => {
            const text = typeof children === 'string' ? children : children?.join('') || ''
            const slug = createSlug(text)
            return (
              <h1
                id={slug}
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
                {...props}
              >
                {children}
              </h1>
            )
          },
          h2: ({ node, children, ...props }) => {
            const text = typeof children === 'string' ? children : children?.join('') || ''
            const slug = createSlug(text)
            return (
              <h2
                id={slug}
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: '1.5rem',
                  marginBottom: '0.75rem',
                  lineHeight: '1.3'
                }}
                {...props}
              >
                {children}
              </h2>
            )
          },
          h3: ({ node, children, ...props }) => {
            const text = typeof children === 'string' ? children : children?.join('') || ''
            const slug = createSlug(text)
            return (
              <h3
                id={slug}
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginTop: '1.25rem',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}
                {...props}
              >
                {children}
              </h3>
            )
          },
          p: ({ node, ...props }) => (
            <p
              style={{
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                color: '#667eea',
                textDecoration: 'none',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderBottomColor = '#667eea'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderBottomColor = 'transparent'
              }}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              style={{
                marginBottom: '1rem',
                paddingLeft: '1.5rem',
                listStyleType: 'disc'
              }}
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              style={{
                marginBottom: '1rem',
                paddingLeft: '1.5rem',
                listStyleType: 'decimal'
              }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li
              style={{
                marginBottom: '0.5rem',
                lineHeight: '1.6'
              }}
              {...props}
            />
          ),
          code: ({ node, inline, ...props }) => {
            if (inline) {
              return (
                <code
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: '0.2em 0.4em',
                    borderRadius: '3px',
                    fontSize: '0.9em',
                    fontFamily: 'monospace'
                  }}
                  {...props}
                />
              )
            }
            return (
              <code
                style={{
                  display: 'block',
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '6px',
                  overflowX: 'auto',
                  fontSize: '0.9em',
                  fontFamily: 'monospace',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}
                {...props}
              />
            )
          },
          pre: ({ node, ...props }) => (
            <pre
              style={{
                marginBottom: '1rem',
                overflowX: 'auto'
              }}
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              style={{
                borderLeft: '4px solid #667eea',
                paddingLeft: '1rem',
                marginLeft: '0',
                marginBottom: '1rem',
                color: '#666',
                fontStyle: 'italic'
              }}
              {...props}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer

