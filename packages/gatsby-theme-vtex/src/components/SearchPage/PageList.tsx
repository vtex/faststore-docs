/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from '@vtex/gatsby-plugin-graphql'
import { Button, Grid } from '@vtex/store-ui'
import React, { FC, Fragment } from 'react'

import {
  SearchQuery,
  SearchQueryQuery,
} from './__generated__/SearchQuery.graphql'
import OverlaySpinner from './OverlaySpinner'
import Page from './Page'
import { useSearch } from '../../sdk/search/useSearch'

interface Props {
  initialData: SearchQueryQuery | undefined
  columns: number[]
  pageSize?: number
}

const List: FC<Props> = ({ initialData, columns, pageSize }) => {
  const { data, fetchMore, isLoadingMore, isReachingEnd } = useSearch({
    query: SearchQuery,
    initialData,
    pageSize,
  })

  if (!data) {
    return <OverlaySpinner />
  }

  return (
    <Fragment>
      <Grid variant="search" columns={columns}>
        {data.map((searchQuery, index) => (
          <Page
            key={`summary-page-${index}`}
            products={searchQuery!.vtex.productSearch!.products!}
          />
        ))}
      </Grid>
      <Button
        variant="loadMore"
        onClick={(e) => {
          ;(e.target as any).blur?.()
          fetchMore()
        }}
        disabled={isReachingEnd || isLoadingMore}
      >
        {isReachingEnd ? '' : isLoadingMore ? 'Loading...' : 'More'}
      </Button>
    </Fragment>
  )
}

export const query = gql`
  query SearchQuery(
    $query: String
    $map: String
    $from: Int
    $to: Int
    $orderBy: String
  ) {
    vtex {
      productSearch(
        query: $query
        map: $map
        from: $from
        to: $to
        orderBy: $orderBy
      ) {
        products {
          ...ProductSummary_syncProduct
        }
      }
    }
  }
`

export default List