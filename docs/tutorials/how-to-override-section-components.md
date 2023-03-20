---
title: "How to override or customize native section components"
sidebar_label: "How to override or customize native section components"
---


# How to override or customize native section components
This guide covers how to override native section components or pass additional props to them.

[Native sections](/tbd-link-to-native-sections-list) are provided by default by VTEX's `@faststore/core` package. Sections are composed by different components that can be customized or overriden to add functionalities or to change looks.

{Image or gif of the expected behavior after completing the guide}

---

## Before you start

_Before you begin, you should already have:_
- A functioning Evergreen store.

_You should also consider that:_

- This feature is experimental.
- Some sections contain multiple instances of the same component. When overriting a component or passing additional props to it, consider that all instances will be affected by this.

---

## Step by step
### Step 1 - Choose a native section to customize

1. Choose the native section to be customized - [list of available native sections](./tbd-link)
2. Navigate to `src/components/overrides` and create a new file named after the native section

eg. Consider you chose the `ProductDetails` section to customize. Create a new file named `ProductDetails.tsx` under the `src/components/overrides` directory.

3. Copy and paste the following boilerplate on the file

You should change the value of the `SECTION` variable to the name of the section you chose to override. In this case, `ProductDetails` is used.

```tsx
const SECTION = "ProductDetails";

const overrides: SectionOverride[SECTION] = { name: SECTION, components: {} };

export default overrides;
```

### Step 2 - Choose a component to override

1. Choose a component to override

You can see a list of overridable components for each native section [here](tbd-link). For this guide, we're choosing to override the `Price` component.

2. Add it to the `overrides` object

Add an object with the name of the component you wish to override to the `components` property inside the `overrides` object.

For this guide, we're choosing to override the `Price` component.

```tsx
const SECTION = "ProductDetails"

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {},
  },
}

export default overrides
```

### Step 3 - Override the component or pass additional props to a it

1. Choose if you want override the component or pass additional props to it

There's a great documentation explaining when you want to override the component or just pass additional props to it - here's the [link](tbd-link).

In summary, you want to override the native component when it doesn't offer the functionality you need or when it is layed out much different from what you desire. By doing that, you'll be losing on the performance updates and bug fixes provided by VTEX for that component. For more in-depth information regarding best practices when overriding components, check the link [here](tbd-link).

For most common use cases, there's probably a prop that can be used to customize the behavior of the native component. You can also customize the theme of your store to tailor the look and feel of the native sections to your needs. By passing an additional prop and using our themification tools, you get the behavior you originally wanted and don't miss out on updates and bug fixes released by VTEX. You can see the list of available props for each component [here](https://evergreen.faststore.dev/components).

2. (Optional) Override the component

Inside the `Price` object, add a property called `Component`. This property value should be defined as a React component created by you, that'll be used to replace every instance of the `Price` component inside the `ProductDetails` section.

```tsx
import CustomPrice from "src/components/custom/CustomPrice"

const SECTION = "ProductDetails"

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {
      Component: CustomPrice,
    },
  },
}

export default overrides
```

3. (Optional) Pass additional props to the component

Inside the `Price` object, add a property called `props`. In addition to the default props this component receives from the section it is contained, every property defined inside the props object will also be passed to it. If a prop you passed has the same name as an already existing prop being received by the component, yours will override the default definition.

```tsx
const SECTION = "ProductDetails"

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {
      props: {
        variation: "listing",
      },
    },
  },
}

export default overrides
```

## Summary

You can have different outcomes depending if you chose to override the component or pass additional props to it.

> If you override the component, additional props will not be considered when overriding it.

If you chose to override the component, you should be able to see your `CustomPrice` component replacing the native `Price` component inside every `ProductDetails` section in your store.

If you chose to pass additional props to the native `Price` component, you should be able to see the new behavior present wherever the `ProductDetails` is present.

---

## Additional resources

Future versions of this doc will take into account the existance of an VS Code extension and CLI command that helps users to generate the boilerplate for overriding or customizing native sections.

We should also enforce the rules for overriding and customizing components through TypeScript.