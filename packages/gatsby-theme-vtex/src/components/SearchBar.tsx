/** @jsx jsx */
import { FC } from 'react'
import { Input, jsx } from '@vtex/store-ui'

const Search: FC = () => (
  <Input variant="header-search" placeholder="Search" aria-label="Search" />
)

export default Search
