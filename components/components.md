# AuthForm Component

## What It Does
The `AuthForm` component creates a simple sign-up or sign-in form for users. It handles user input (like name, email, and password), validates it, and shows a success or error message when submitted.

## How to Use It
- Import it into your project: `import AuthForm from './AuthForm';`
- Add it to your page with a `type` prop: `<AuthForm type="sign-up" />` or `<AuthForm type="sign-in" />`

## Key Features
- **Dynamic Form**: Shows a "Name" field only for sign-up, not sign-in.
- **Validation**: Checks that the email is valid and the password is at least 3 characters long (name too, for sign-up).
- **Feedback**: Displays a success message (e.g., "Account created successfully!") or an error if something goes wrong.
- **Navigation**: Redirects to the sign-in page after sign-up, or the homepage after sign-in.
- **Switch Links**: Offers a link to switch between sign-up and sign-in.

## Props
- `type`: Either `"sign-up"` or `"sign-in"` to decide the form's purpose.

## Example
```jsx
<AuthForm type="sign-up" />
```

# FormField Component

## What It Does
The `FormField` component is a reusable piece that creates a labeled input field (e.g., for name, email, or password) in a form. It connects to a form library to handle user input and show errors if the input is invalid.

## How to Use It
- Import it: `import FormField from './FormField';`
- Add it inside a `<Form>` component with props like `control`, `name`, `label`, and `placeholder`.

## Key Features
- **Flexible Inputs**: Works for text, email, password, or other input types.
- **Validation**: Shows error messages if the input doesn’t meet rules (e.g., invalid email).
- **Customizable**: Lets you set a label, placeholder, and input type.

## Props
- `control`: The form control object (from `react-hook-form`).
- `name`: The field’s name (e.g., `"email"`).
- `label`: The text above the input (e.g., `"Email"`).
- `placeholder`: Hint text inside the input (e.g., `"Enter your email"`).
- `type`: Optional input type (e.g., `"text"`, `"email"`, `"password"`). Defaults to `"text"`.

## Example
```jsx
<FormField
  control={form.control}
  name="email"
  label="Email"
  placeholder="Enter your email"
  type="email"
/>