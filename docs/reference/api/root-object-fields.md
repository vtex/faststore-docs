# Root object fields

The FastStore API provides access to additional data fields that are not included in the [native FastStore GraphQL schema](/reference/api/queries). These fields can be accessed through the root object of each query. You can find more information on the available fields below.

:::warning
Keep in mind that the fields below may not be available in the [native FastStore GraphQL schema](/reference/api/queries). To use the ones that are not available in the native schema, you must [extend the schema](/how-to-guides/faststore-api/extending-the-faststore-api). Learn more about how you can [use the root object fields in your storefront](/how-to-guides-faststore-api/using-the-faststore-api-root-object-fields).
:::

## Product query root

See below the root fields available on the `product` FastStore API Product query.

## All products query root

See below the root fields available on the `allProducts` FastStore API Product query.

## Collection query root

See below the root fields available on the `collection` FastStore API Product query. Since collections may have different types, there are different fields associated with each of them: [Brand](#brand), [CategoryTree](#categorytree), and [CollectionPageType](#collectionpagetype).

## All collections query root

See below the root fields available on the `allCollections` FastStore API Product query.

## Search query root

See below the root fields available on the `search` FastStore API Product query.