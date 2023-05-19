import React from 'react'

import { ContentProvider } from './components/ContentProvider'
import Content from './components/Content'

function AI() {
  console.log(1)
  return (
    <ContentProvider>
      <Content/>
    </ContentProvider>

  )
}
export default AI
