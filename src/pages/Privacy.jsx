import React from 'react'
import BlogLayout from '../components/BlogLayout'
import MarkdownRenderer from '../components/MarkdownRenderer'
import privacyContent from '../content/privacy.md?raw'

function Privacy() {
  return (
    <BlogLayout markdownContent={privacyContent}>
      <div>
        <MarkdownRenderer content={privacyContent} />
      </div>
    </BlogLayout>
  )
}

export default Privacy;

