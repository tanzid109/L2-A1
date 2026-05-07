# TypeScript `Pick` and `Omit`: Slicing Interfaces Without Repeating Yourself

## Introduction
`Pick` and `Omit` prevent code duplication by allowing us to create new types from an existing master interface without rewriting its properties. Instead of manually repeating fields in multiple interfaces, we reuse the original interface and select (`Pick`) or exclude (`Omit`) only the needed properties.

We can check this example --->

```
interface User { 
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

interface UserPreview {
  id: number;
  name: string; 
  email: string;
}

interface UserUpdate {
  name: string;  
  email: string; 
}

```

In `UserPreview` and `UserUpdate` we used repetedly name and email. So this is not following `DRY`. The code is repeted code. So if we use  `Pick` or `Omit` we can make that code `DRY`

## `Pick` Select only what we need
``` 
type UserPreview = Pick<User, 'id' | 'name' | 'email'> 

```

## `Omit` Exclude what we don't need
```
type UserPreview = Omit<User, 'password'>

```

This is how `Pick` and `Omit` works. 

## Conclusion

`Pick` and `Omit` turn your master interface into a **single source of truth**. Instead of writing and maintaining multiple overlapping interfaces, we can declare the full shape once and derive every specialized slice from it. When the master changes, all derived types update for free no manual syncing, no drift. That is the DRY principle working exactly as intended.
