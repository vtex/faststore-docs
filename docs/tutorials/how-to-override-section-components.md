---
title: "How to override or customize native section components"
sidebar_label: "How to override or customize native section components"
---

# How to override or customize native section components

In this guide, learn about two types of customization of a native section component: overriding and passing additional props to them.

[Native sections](/tbd-link-to-native-sections-list) are composed of different components that can be customized or overridden to add functionalities or to change their appearance in the storefront. Sections are provided by default by VTEX's `@faststore/core` package.

\{Image or gif of the expected behavior after completing the guide}

---

## Before you start

_Before you begin, you should already have:_

- A functioning Evergreen store.

_You should consider that:_

- This feature is experimental.
- Some sections contain multiple instances of the same component. When overriting a component or passing additional props to it, consider that all instances will be affected by this.

---

## Step by step

### Step 1 - Choose a native section to customize

1. Choose the native section to be customized - [list of available native sections](./tbd-link)
2. Navigate to `src/components/overrides` and create a new file named after the native section. For example, if you chose the `ProductDetails` section for customization, create a new file named `ProductDetails.tsx` under the `src/components/overrides` directory.

3. Copy and paste the following boilerplate on the file:

```tsx
const SECTION = "ProductDetails";

const overrides: SectionOverride[SECTION] = { name: SECTION, components: {} };

export default overrides;
```

> ⚠️ Change the value of the `SECTION` variable to the name of the section you want to override. In this case, we used the `ProductDetails` example.

### Step 2 - Choose a component to override

1. Choose a component to override from the [list of overridable components for each native section](/tbd-link). In this example, we are overriding the `Price` component.

2. Add an object with the name of the component you wish to override to the `components` property inside the `overrides` object.

```tsx
const SECTION = "ProductDetails";

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {},
  },
};

export default overrides;
```

### Step 3 - Override or pass additional props to a component

Overriding a native component may be necessary if it lacks the functionality you require or has a layout that does not meet your needs. There are cases where a prop is available to customize the behavior of the native component. Additionally, you can customize your store's theme to tailor the look and feel of the native sections to your needs.

For more information on when to override or pass additional prop to a component, and the best practices for overriding components, check the following documentation:

- [Best Practice for overriding components](/tbd-link)
- [FAQ - When to override or pass additonal prop to a component](/tbd-link)

> ⚠️ Overriding a component leads you to miss out on performance updates and bug fixes provided by VTEX for that component. By passing an additional prop and using our theming tools, you can achieve the desired behavior without missing out on updates and bug fixes from VTEX. Check out the available props for each component on [Components UI](https://evergreen.faststore.dev/components).

#### (Optional) Override the component

Inside the `Price` object, add a property called `Component`. This property value should be defined as a React component created by you, that will be used to replace every instance of the `Price` component inside the `ProductDetails` section.

```tsx
import CustomPrice from "src/components/custom/CustomPrice";

const SECTION = "ProductDetails";

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {
      Component: CustomPrice,
    },
  },
};

export default overrides;
```

#### (Optional) Pass additional props to the component

Inside the `Price` object, add a property called `props`. In addition to the default props this component receives from the section it is contained, every property defined inside the props object will also be passed to it. If a prop you passed has the same name as an already existing prop being received by the component, yours will override the default definition.

```tsx
const SECTION = "ProductDetails";

const overrides: SectionOverride[SECTION] = {
  name: SECTION,
  components: {
    Price: {
      props: {
        variation: "listing",
      },
    },
  },
};

export default overrides;
```

## Summary

You can have different outcomes depending if you chose to override the component or pass additional props to it.

> ⚠️ If you override the component, additional props will not be considered when overriding it.

If you chose to override the component, you should be able to see your `CustomPrice` component replacing the native `Price` component inside every `ProductDetails` section in your store.

If you chose to pass additional props to the native `Price` component, you should be able to see the new behavior present wherever the `ProductDetails` is present.

---

## Additional resources

Future versions of this doc will take into account the existance of an VS Code extension and CLI command that helps users to generate the boilerplate for overriding or customizing native sections.

We should also enforce the rules for overriding and customizing components through TypeScript.
