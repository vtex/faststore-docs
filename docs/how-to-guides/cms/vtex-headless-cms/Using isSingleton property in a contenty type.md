# Using `isSingleton` property in a content type
The `isSingleton` property helps maintain consistency in a content type by ensuring that only one page of a particular content type exists in the Headless CMS. For example, implementing this property in a Home Page content type would prevent the creation of multiple pages of this content type and ensure that any updates to the Home Page layout are reflected on one page.

![singleton-en](https://user-images.githubusercontent.com/67270558/230461926-6944c58e-60f2-4857-82d3-43ee507cac4e.gif)

Follow the steps below to add the `isSingleton` property to the store.

## Step-by-step
1. Go to the store's repository and access  `CMS` > `content-types.json`.
2. Choose your desired content type and add the `isSingleton` property as `true`. For example:

```json
    {
        "id": "home",
        "name": "Home Page",
        "configurationSchemaSets": [],
        "isSingleton": true
    },

```

3. Sync your changes in the `CMS` folder by running the following command:
```
vtex cms sync
```

Once you've synced your changes, go to your store's Admin and select **Storefront > Headless CMS**. Here, you can:

- **Check the content type**
Access **Headless CMS** and search for the content type on which you added the `isSingleton` property, such as a Home Page content type. You will notice that you cannot duplicate the content, only change its status to **Publish**, **Draft**, or **Unpublish**.


- **Create the content type**
Access **Headless CMS**, select `CREATE NEW` and choose the content type to which you added the `isSingleton` property.
