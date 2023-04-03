# Using onlySettings property in a content type

The `onlySetting` property indicates that a [content type](https://www.faststore.dev/tutorials/cms-storecomponents/0#content-types) is meant for settings only.

For instance, you might use this attribute for content types that do not require storefront content, such as an SEO page.

| Image 1  | Image 2  |  
|---|---|
| ![without-property](https://user-images.githubusercontent.com/67270558/227936062-02e15860-c6d6-4525-9eed-19c37abfd626.png)  | ![with-property](https://user-images.githubusercontent.com/67270558/227936232-fa8dfab7-2f01-42d1-9f68-b2ab8623a3af.png)  | 
| Image 1 - Content type without `onlySettings` and with two tabs: **Sections** and **SEO**. | Image 2 - Content type with `onlySettings` and with one tab for settings: **SEO**. | 

This property ensures that the content type's page displays only the available settings without the **Section** tab.
Follow the steps below to use the `onlySettings` property for your desired content type.

## Step-by-step
1. Go to the store's repository and access  ` CMS` > `content-types.json`.
2. Choose your desired content type and add the `onlySettings` property as `true`. For example:

```json
    {
        "id": "SEO",
        "name": "Global SEO Settings",
        "onlySettings": true,
        "configurationSchemaSets": [
            {
                "name": "SEO",
                "configurations": [
                    ...
                ]
            }
        ]
    }
```

3. Sync your changes in the `CMS` folder by running the following command:

```bash
vtex cms sync
```

After syncing your changes, go to your store's Admin and select **Storefront > Headless CMS**. Then, navigate to the content type to which you added the property and ensure the only tab available is for settings.