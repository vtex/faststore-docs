/** @jsx jsx */
import { ComponentPropsWithoutRef, FC } from 'react'
import { jsx, Grid } from '@vtex/store-ui'

import { ProductSummary_ProductFragment } from '../ProductSummary/__generated__/ProductSummary_product.graphql'
import ProductSummary from '../ProductSummary'

interface Props extends ComponentPropsWithoutRef<typeof Grid> {
  items: Array<ProductSummary_ProductFragment | undefined | null>
  pageSizes?: number[]
  variant: string
}

const ShelfPage: FC<Props> = ({ items, pageSizes, variant, ...props }) => (
  <Grid
    {...props}
    variant={`shelf.${variant}.page.container`}
    gap={2}
    columns={pageSizes}
    sx={{ width: '100%' }}
  >
    {items.map((item) => (
      <ProductSummary key={item!.productId!} product={item!} />
    ))}
  </Grid>
)

export default ShelfPage