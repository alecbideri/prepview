# Authentication System Setup

This project sets up a basic authentication system with dedicated pages for sign-up and sign-in, wrapped in a shared layout. Below is an explanation of the layout and pages, their purpose, and the file structure.

## Overview
The authentication system uses two distinct routes (`/sign-up` and `/sign-in`) for user registration and login, with a consistent layout applied to both. This keeps the structure simple and organized.

## File Structure

project/
├── app/
│   ├── sign-up/
│   │   └── page.tsx         
│   ├── sign-in/
│   │   └── page.tsx         
│   └── layout.tsx           
└── README.md                

- **`app/`**: Contains Next.js pages and the shared layout.
    - `sign-up/page.tsx`: The sign-up page.
    - `sign-in/page.tsx`: The sign-in page.
    - `layout.tsx`: The layout applied to both auth pages.

## Layout and Pages

### AuthLayout (app/layout.tsx)
This layout wraps all authentication-related pages to provide a consistent structure.

```tsx
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-layout">{children}</div>;
};
export default AuthLayout;

```

- **`app/`**: Contains Next.js pages and the shared layout.
    - `sign-up/page.tsx`: The sign-up page.
    - `sign-in/page.tsx`: The sign-in page.
    - `layout.tsx`: The layout applied to both auth pages.

## Layout and Pages

### AuthLayout (app/layout.tsx)
This layout wraps all authentication-related pages to provide a consistent structure.

```tsx
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-layout">{children}</div>;
};
export default AuthLayout;
```