---
slug: react-typescript-snippet
title: React Typescript Snippet
date: 2022-04-13
summary: React Typescript
image: 
---

## UseState

```tsx
interface BlogProps {
  title: string
  date: Date
  categories: Array<string>
  isPublished: boolean
}

// Boolean type
const [isPublished] = React.useState<boolean>(true)

// String type
const [title] = React.useState<string>('React useState')

// Number type
const [date] = React.useState<Date>(28)

// Array of string
const [categories] = React.useState<Array<string>>(['javascript', 'node.js'])

// Custom interface
const [person] = React.useState<PersonProps>({
  isCool,
  name,
  age,
  hobbies,
})

// Null or undefined
const [random] = React.useState<null | undefined>()
```
