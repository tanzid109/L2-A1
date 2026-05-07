### 1. Why `any` is a "Type Safety Hole" and Why `unknown` is the Safer Choice

when we use the `any` type, Typescript disables all type checking for variable.It stops give me suggestion when we coding. We can treat a string like a number or treat number like a string.The compiler won't complain this. It's behaves just like a plain javascript. This errors only show in runtime or when we build the projects. If we give `any` type we will not get the joy or excitement of typescript. So thats why this called **"Type Safety Hole"**

On the other side `unknown` is much safer. It means I don't know this data type yet. But unlike `any`, Typescript forces us to validate the type before we can perform any operations. So this is why `unknown` the safer choice for handling unpredictable data.

### What is Type Narrowing?
In TypeScript, `narrowing` refers to the process of reducing the type of a variable from a broader type to a more specific type within a certain code block or context. This is often done through conditional statements or type guards, which help the TypeScript compiler understand more precisely what the type of a variable is at a given point in the code.

