---
id: 2
description: Set up the VTEX Headless CMS in your FastStore project.
sidebar_label: "2. Setting up the VTEX Headless CMS in your FastStore project"
pagination_label: Part 2
---

# Part 2: Setting up the VTEX Headless CMS in your FastStore project

## Introduction

Now that you are familiar with the core concepts of the **VTEX Headless CMS** and have set it up in your VTEX account, let's get back to our **FastStore** project to define our own **Content Types** and **Sections**.

By the end of this part of this tutorial, you will be able to see your first definition of a Content Type available for use at the VTEX Headless CMS app. Next, we will dive deeper into how to create these definitions in a smoother way.

---

## Step by step

### Step 1 - Creating the CMS folder

1. Open the terminal and change to the root directory of your FastStore project.
2. Create a new folder named `cms` at the root of your FastStore project:

   ```bash
   mkdir cms
   ```

3. Inside the `cms` folder, create a folder for your project:

   ```bash
   cd cms
   mkdir faststore
   ```

4. Inside the `faststore` folder, create the three following files:

   - `content-types.json` - an array of JSON objects that describes the **Content Types** available for customization at the VTEX Headless CMS app.
   - `sections.json` - an array of JSON objects that describes the content structure of the frontend **Section** components available for customization at the VTEX Headless CMS app.
   - `translation-keys.json` - an array of JSON objects that defines the translation keys of the Sections descriptions.

   ```bash
   touch cms/faststore/content-types.json cms/faststore/sections.json cms/faststore/translation-keys.json
   ```

5. Update the `sections.json` file with an empty array:

   ```bash
   echo "[]" > cms/faststore/sections.json
   ```

6. Update the `translation-keys.json` file with an empty object:
   ```
   echo "{}" > cms/faststore/translation-keys.json
   ```

:::info
Once you have the 1.0.7 version of @vtex/cli-plugin-cms it is possible to specify the builder that you want to synchronize. To do that you should update with the command `vtex plugins update` and create a folder to each one of the builders to be able to specify it. Example: cms/faststore/content-types.json"
:::

7. Now, open the `content-types.json` file in any code editor of your choice and add the following code:

   ```json title="cms/faststore/content-types.json"
   [
     {
       "id": "home",
       "name": "Home Page",
       "configurationSchemaSets": []
     },
     {
       "id": "institutionalPage",
       "name": "Institutional page",
       "configurationSchemaSets": [
         {
           "name": "SEO",
           "configurations": [
             {
               "name": "siteMetadataWithSlug",
               "schema": {
                 "title": "Site Metadata",
                 "description": "Configure global site metadata",
                 "type": "object",
                 "widget": {
                   "ui:ObjectFieldTemplate": "GoogleSeoPreview"
                 },
                 "properties": {
                   "title": {
                     "title": "Default page title",
                     "description": "Display this title when no other tile is available",
                     "type": "string",
                     "default": "Store Theme | VTEX SFJ"
                   },
                   "description": {
                     "title": "Meta tag description",
                     "type": "string",
                     "default": "A beautifully designed site for general VTEX stores"
                   },
                   "titleTemplate": {
                     "title": "Title template to be used in category/product pages",
                     "type": "string",
                     "default": "%s | Store Theme"
                   },
                   "slug": {
                     "title": "URL Slug",
                     "type": "string",
                     "default": "/landing-page-url"
                   }
                 }
               }
             }
           ]
         }
       ]
     }
   ]
   ```

   :::info
   Don't worry about the structure of this file for now, as we'll learn more about it later in this tutorial. However, notice that we have defined two different Content Types: the **Home Page** and the **Institutional Page**.
   :::

8. Save your changes in the `content-types.json` file.

### Step 2 - Syncing your changes

Let's now sync our changes with the VTEX Headless CMS app and see what happens.

1. Open the terminal and log in to your VTEX account.
2. Create a new development workspace by running the following command.

   ```bash
   vtex use {workspace}
   ```

   :::caution
   Remember to replace the values between curly brackets according to your scenario.
   :::

   :::info
   Use a development workspace to try your definitions of Sections and Content Types before syncing them with the VTEX `master` workspace.
   :::

3. Change to the root directory of your FastStore project.
4. Sync your changes in the `cms` folder with the VTEX Headless CMS app:

   ```bash
   vtex cms sync
   ```

   :::caution
   If you have the @vtex/cli-plugin-cms@1.0.7 installed you can use the \{builderName} argument to syncronize a specific builder:
   `sh
        vtex cms:sync {builderName}
       `
   :::

Once your changes are synced with the VTEX Headless CMS, the terminal will show the following message.

```bash
CMS synced successfully...
```

### Step 3 - Checking your changes

1. Access the VTEX Admin using the workspace you previously created (e.g., `https://{workspace}--{account}.myvtex.com/admin`).
2. Go to **Storefront > Headless CMS**.
3. Select your Faststore project.
4. Click on **Create New**.

You should now see the Content Type we created in the previous step available for use at the VTEX Headless CMS app. However, no sections or translation keys will be available yet. We'll learn more about this in the following part of this tutorial.

![VTEX CMS Sync](https://vtexhelp.vtexassets.com/assets/docs/src/vtex-cms-sync___6388c7ddf3d6891bf9d9dd4a09b45390.png)
