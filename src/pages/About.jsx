import React from 'react'
import BlogLayout from '../components/BlogLayout'
import MarkdownRenderer from '../components/MarkdownRenderer'
import aboutContent from '../content/about.md?raw'

function About() {
  return (
    <BlogLayout markdownContent={aboutContent}>
      <div>
        <MarkdownRenderer content={aboutContent} />
      </div>
    </BlogLayout>
  )
}

export default About;

