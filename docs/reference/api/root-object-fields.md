# Root object fields

The FastStore API provides access to additional data fields that are not included in the [native FastStore GraphQL schema](/reference/api/queries). These fields can be accessed through the root object of each query. You can find more information on the available fields below.

:::warning
Keep in mind that the fields below may not be available in the [native FastStore GraphQL schema](/reference/api/queries). To use the ones that are not available in the native schema, you must [extend the schema](/how-to-guides/faststore-api/extending-the-faststore-api). Learn more about how you can [use the root object fields in your storefront](/how-to-guides-faststore-api/using-the-faststore-api-root-object-fields).
:::

## Product query root

See below the root fields available on the `product` FastStore API Product query.




### Item
## Item

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Videos</td>
      <td>Array of strings</td>
      <td>An array of video URLs related to the item.</td>
    </tr>
    <tr>
      <td>attachments</td>
      <td>Array of attachments</td>
      <td>An array of attachments related to the item.</td>
    </tr>
    <tr>
      <td>attachmentsValues</td>
      <td>Array of attachments or undefined</td>
      <td>An array of attachments related to the item or undefined if there are no attachments.</td>
    </tr>
    <tr>
      <td>complementName</td>
      <td>String</td>
      <td>The complement name of the item.</td>
    </tr>
    <tr>
      <td>ean</td>
      <td>String</td>
      <td>The EAN (European Article Number) of the item.</td>
    </tr>
    <tr>
      <td>images</td>
      <td>Array of images</td>
      <td>An array of image URLs related to the item.</td>
    </tr>
    <tr>
      <td>isKit</td>
      <td>Boolean</td>
      <td>A boolean value indicating whether the item is a kit or not.</td>
    </tr>
    <tr>
      <td>isVariantOf</td>
      <td>Product</td>
      <td>The product that this item is a variant of, if any.</td>
    </tr>
    <tr>
      <td>itemId</td>
      <td>String</td>
      <td>The unique identifier of the item.</td>
    </tr>
    <tr>
      <td>kitItems</td>
      <td>Array of KitItems or undefined</td>
      <td>An array of kit items or undefined if the item is not a kit.</td>
    </tr>
    <tr>
      <td>measurementUnit</td>
      <td>String</td>
      <td>The measurement unit of the item.</td>
    </tr>
    <tr>
      <td>modalType</td>
      <td>any</td>
      <td>The modal type of the item.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>The name of the item.</td>
    </tr>
    <tr>
      <td>nameComplete</td>
      <td>String</td>
      <td>The complete name of the item.</td>
    </tr>
    <tr>
      <td>referenceId</td>
      <td>Array of ReferenceIds</td>
      <td>An array of reference IDs related to the item.</td>
    </tr>
    <tr>
      <td>sellers</td>
      <td>Array of Sellers</td>
      <td>An array of sellers related to the item.</td>
    </tr>
    <tr>
      <td>unitMultiplier</td>
      <td>Number</td>
      <td>The unit multiplier of the item.</td>
    </tr>
    <tr>
      <td>variations</td>
      <td>Array of Variations</td>
      <td>An array of variations related to the item.</td>
    </tr>
  </tbody>
</table>


### Attachment
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>Number</td>
      <td>A unique identifier for the attachment.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>The name of the attachment.</td>
    </tr>
    <tr>
      <td>required</td>
      <td>Boolean</td>
      <td>Specifies whether the attachment is required or optional.</td>
    </tr>
    <tr>
      <td>domainValues</td>
      <td>String</td>
      <td>A list of acceptable values for the attachment, if applicable.</td>
    </tr>
  </tbody>
</table>


### Image
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>imageId</td>
      <td>String</td>
      <td>A unique identifier for the image.</td>
    </tr>
    <tr>
      <td>imageLabel</td>
      <td>String</td>
      <td>A descriptive label for the image.</td>
    </tr>
    <tr>
      <td>imageTag</td>
      <td>String</td>
      <td>A tag or keyword associated with the image.</td>
    </tr>
    <tr>
      <td>imageText</td>
      <td>String</td>
      <td>Text associated with the image, such as a caption or description.</td>
    </tr>
    <tr>
      <td>imageUrl</td>
      <td>String</td>
      <td>The URL where the image can be accessed.</td>
    </tr>
  </tbody>
</table>


### Product
## Product

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>brand</td>
      <td>String</td>
      <td>The brand name of the product.</td>
    </tr>
    <tr>
      <td>brandId</td>
      <td>Number</td>
      <td>The unique identifier of the brand.</td>
    </tr>
    <tr>
      <td>cacheId</td>
      <td>String or undefined</td>
      <td>The unique identifier of the cached product.</td>
    </tr>
    <tr>
      <td>categories</td>
      <td>Array of strings</td>
      <td>The list of categories that the product belongs to.</td>
    </tr>
    <tr>
      <td>categoriesIds</td>
      <td>Array of strings</td>
      <td>The list of category IDs that the product belongs to.</td>
    </tr>
    <tr>
      <td>categoryId</td>
      <td>String</td>
      <td>The ID of the primary category that the product belongs to.</td>
    </tr>
    <tr>
      <td>clusterHighlights</td>
      <td>Record<String, any></td>
      <td>The list of cluster highlights associated with the product.</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td>The description of the product.</td>
    </tr>
    <tr>
      <td>items</td>
      <td>Array of items</td>
      <td>The list of items associated with the product.</td>
    </tr>
    <tr>
      <td>link</td>
      <td>String</td>
      <td>The link to the product page.</td>
    </tr>
    <tr>
      <td>linkText</td>
      <td>String</td>
      <td>The text for the link to the product page.</td>
    </tr>
    <tr>
      <td>priceRange</td>
      <td>PriceRange</td>
      <td>The price range of the product.</td>
    </tr>
    <tr>
      <td>productClusters</td>
      <td>Record<String, String></td>
      <td>The list of product clusters associated with the product.</td>
    </tr>
    <tr>
      <td>productId</td>
      <td>String</td>
      <td>The unique identifier of the product.</td>
    </tr>
    <tr>
      <td>productName</td>
      <td>String</td>
      <td>The name of the product.</td>
    </tr>
    <tr>
      <td>productReference</td>
      <td>String</td>
      <td>The reference code of the product.</td>
    </tr>
    <tr>
      <td>properties</td>
      <td>Array of properties</td>
      <td>The list of properties associated with the product.</td>
    </tr>
    <tr>
      <td>releaseDate</td>
      <td>String</td>
      <td>The release date of the product.</td>
    </tr>
    <tr>
      <td>selectedProperties</td>
      <td>Array of properties</td>
      <td>The list of selected properties associated with the product.</td>
    </tr>
    <tr>
      <td>skuSpecifications</td>
      <td>Array of SkuSpecifications or undefined</td>
      <td>The list of SKU specifications associated with the product.</td>
    </tr>
    <tr>
      <td>specificationGroups</td>
      <td>Array of SpecificationGroups</td>
      <td>The list of specification groups associated with the product.</td>
    </tr>
  </tbody>
</table>


### PriceRange
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listPrice</td>
      <td>Price</td>
      <td>The original or suggested price of the product.</td>
    </tr>
    <tr>
      <td>sellingPrice</td>
      <td>Price</td>
      <td>The current selling price of the product.</td>
    </tr>
  </tbody>
</table>


### Price
## Price

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>highPrice</td>
      <td>Number or null</td>
      <td>The highest price available for the product or service, or null if not available.</td>
    </tr>
    <tr>
      <td>lowPrice</td>
      <td>Number or null</td>
      <td>The lowest price available for the product or service, or null if not available.</td>
    </tr>
  </tbody>
</table>


### Property
## Property

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>The name of the property.</td>
    </tr>
    <tr>
      <td>values</td>
      <td>Array of strings</td>
      <td>The possible values that the property can have.</td>
    </tr>
  </tbody>
</table>


### SkuSpecification
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field</td>
      <td>SKUSpecificationField</td>
      <td>Specifies the name or type of the SKU specification field.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Array of SKUSpecificationValues</td>
      <td>Specifies the values associated with the SKU specification field.</td>
    </tr>
  </tbody>
</table>


### SKUSpecificationField
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>String or undefined</td>
      <td>The unique identifier for the SKU specification.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>The name of the SKU specification.</td>
    </tr>
    <tr>
      <td>originalName</td>
      <td>String or undefined</td>
      <td>The original name of the SKU specification before any modifications.</td>
    </tr>
  </tbody>
</table>


### SKUSpecificationValues
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fieldId</td>
      <td>String or undefined</td>
      <td>The unique identifier for the field associated with the SKU specification value.</td>
    </tr>
    <tr>
      <td>id</td>
      <td>String or undefined</td>
      <td>The unique identifier for the SKU specification value.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>The name of the SKU specification value.</td>
    </tr>
    <tr>
      <td>originalName</td>
      <td>String or undefined</td>
      <td>The original name of the SKU specification value before any modifications were made.</td>
    </tr>
  </tbody>
</table>


### KitItem
## KitItem

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>itemId</td>
      <td>String</td>
      <td>Unique identifier for the kit item.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Number</td>
      <td>The quantity of the kit item included in the kit.</td>
    </tr>
  </tbody>
</table>


### ReferenceId
## ReferenceId

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Key</td>
      <td>String</td>
      <td>The unique identifier for the reference.</td>
    </tr>
    <tr>
      <td>Value</td>
      <td>String</td>
      <td>The value associated with the reference.</td>
    </tr>
  </tbody>
</table>


### Seller
## Seller

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>addToCartLink</td>
      <td>String</td>
      <td>The URL link to add the product to cart for this seller.</td>
    </tr>
    <tr>
      <td>comertialOffer</td>
      <td>ComertialOffer</td>
      <td>The commercial offer details for this seller.</td>
    </tr>
    <tr>
      <td>sellerDefault</td>
      <td>Boolean</td>
      <td>Indicates whether this seller is the default seller for the product.</td>
    </tr>
    <tr>
      <td>sellerId</td>
      <td>String</td>
      <td>The unique identifier of the seller.</td>
    </tr>
    <tr>
      <td>sellerName</td>
      <td>String</td>
      <td>The name of the seller.</td>
    </tr>
  </tbody>
</table>


### ComertialOffer
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AvailableQuantity</td>
      <td>Number</td>
      <td>The quantity of this item that is available for purchase.</td>
    </tr>
    <tr>
      <td>BuyTogether</td>
      <td>Array of any</td>
      <td>An array of items that can be purchased together with this item.</td>
    </tr>
    <tr>
      <td>CacheVersionUsedToCallCheckout</td>
      <td>String</td>
      <td>The version of the cache used to call the checkout API.</td>
    </tr>
    <tr>
      <td>DeliverySlaSamples</td>
      <td>Array of DeliverySlaSamples</td>
      <td>An array of delivery SLA (Service Level Agreement) samples for this item.</td>
    </tr>
    <tr>
      <td>DeliverySlaSamplesPerRegion</td>
      <td>Record<string, DeliverySlaSamples></td>
      <td>A record of delivery SLA samples for this item per region.</td>
    </tr>
    <tr>
      <td>DiscountHighLight</td>
      <td>Array of any</td>
      <td>An array of discount highlights for this item.</td>
    </tr>
    <tr>
      <td>GetInfoErrorMessage</td>
      <td>Any</td>
      <td>An error message returned when trying to get information about this item.</td>
    </tr>
    <tr>
      <td>GiftSkuIds</td>
      <td>Array of strings</td>
      <td>An array of SKU (Stock Keeping Unit) IDs for gift items associated with this item.</td>
    </tr>
    <tr>
      <td>Installments</td>
      <td>Array of Installments</td>
      <td>An array of installment options available for this item.</td>
    </tr>
    <tr>
      <td>ItemMetadataAttachment</td>
      <td>Array of any</td>
      <td>An array of item metadata attachments for this item.</td>
    </tr>
    <tr>
      <td>ListPrice</td>
      <td>Number</td>
      <td>The list price of this item.</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>Number</td>
      <td>The price of this item.</td>
    </tr>
    <tr>
      <td>PriceValidUntil</td>
      <td>String</td>
      <td>The date until which the price of this item is valid.</td>
    </tr>
    <tr>
      <td>PriceWithoutDiscount</td>
      <td>Number</td>
      <td>The price of this item without any discounts applied.</td>
    </tr>
    <tr>
      <td>RewardValue</td>
      <td>Number</td>
      <td>The reward value for this item.</td>
    </tr>
    <tr>
      <td>Tax</td>
      <td>Number</td>
      <td>The tax applied to the price of this item.</td>
    </tr>
    <tr>
      <td>Teasers</td>
      <td>Array of Record<string, unknown></td>
      <td>An array of teaser information for this item.</td>
    </tr>
    <tr>
      <td>spotPrice</td>
      <td>Number</td>
      <td>The spot price of this item.</td>
    </tr>
    <tr>
      <td>teasers</td>
      <td>Array of Record<string, unknown> or undefined</td>
      <td>An array of teaser information for this item or undefined if there are no teasers available.</td>
    </tr>
  </tbody>
</table>

### DeliverySlaSamples

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DeliverySlaPerTypes</td>
      <td>Array of any</td>
      <td>An array of delivery service level agreements (SLAs) for different types of deliveries.</td>
    </tr>
    <tr>
      <td>Region</td>
      <td>Any</td>
      <td>The region where the delivery service is available.</td>
    </tr>
  </tbody>
</table>


### Installments
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InterestRate</td>
      <td>Number</td>
      <td>The interest rate for the installment plan.</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>String</td>
      <td>The name of the installment plan.</td>
    </tr>
    <tr>
      <td>NumberOfInstallments</td>
      <td>Number</td>
      <td>The number of installments in the plan.</td>
    </tr>
    <tr>
      <td>PaymentSystemGroupName</td>
      <td>String</td>
      <td>The name of the payment system group associated with the installment plan.</td>
    </tr>
    <tr>
      <td>PaymentSystemName</td>
      <td>String</td>
      <td>The name of the payment system associated with the installment plan.</td>
    </tr>
    <tr>
      <td>TotalValuePlusInterestRate</td>
      <td>Number</td>
      <td>The total value of the purchase including the interest rate for the installment plan.</td>
    </tr>
    <tr>
      <td>Value</td>
      <td>Number</td>
      <td>The value of each installment in the plan.</td>
    </tr>
  </tbody>
</table>

## All products query root

See below the root fields available on the `allProducts` FastStore API Product query.

## Collection query root

See below the root fields available on the `collection` FastStore API Product query. Since collections may have different types, there are different fields associated with each of them: [Brand](#brand), [CategoryTree](#categorytree), and [CollectionPageType](#collectionpagetype).

## All collections query root

See below the root fields available on the `allCollections` FastStore API Product query.

## Search query root

See below the root fields available on the `search` FastStore API Product query.