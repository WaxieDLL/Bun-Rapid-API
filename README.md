# Bun Rapid API

### Purpose

I created it for my personal projects for the purpose of easily creating API endpoints.

### Features

It’s pretty early stage of this project but it’s  enough to get started already!

- File based routing
- Handle API methods in a single page
- Middleware system
- Dynamic API routes
- Too fast (Bun is a miracle.)
- Basic implementation, easy to get started

### API Routes

You can create your API endpoints by creating a file using name of the endpoint.

Let’s say, you want to create  `/products` endpoint. So, there are two ways. You can create a file named as `products.ts` (~`.js`) or either make a products directory and put `index.ts` inside of it.

First way: `src/routes/products.ts`

Second way: `src/routes/products/index.ts`

Now, the most fun part, handling API Methods.

If you want to accept GET requests, just export a function named as `GET` and this project will automatically handle it. It works with every single request methods.

If you want to create `POST` route, export a `POST` function. (`PUT` / `DELETE` / `PATCH` … )

### Code Example

So I assume we created a file like this:

`/our-project/src/routes/hello.ts`

And I want to expose a `POST` method.

Here is:

```ts
import type { EndPointProps } from "globaltypes"

export function POST({ request, response }: EndPointProps) {
    response(`And it's done.`);
	/* response({ message: "GET Request" }); */
}
```

You can find more example on routes folder.

### Quick Start

1. Clone repository
```git clone https://github.com/WaxieDLL/Bun-Rapid-API```
2. Install dependencies
```bun install ```
3. Modify project however you like
4. Start the server
```bun start ```
5. If you didn’t change port, you can take a look at 127.0.0.1:8080

### Lastly

I will continue adding feature to this project whenever I’m free to do so.
Bun team did a great job, it’s a miracle for us.