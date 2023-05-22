import React from 'react'

import { ContentProvider } from './components/contentProvider'
import Content from './components/content'

function AI() {
  return (
    <ContentProvider>
      <Content/>
    </ContentProvider>
  )
}
export default AI
