# React base admin

## Feature

- Login page
- Log out UI
- Routers
- Navigation insider
- Breadcrumb

## Structure folder

```
src/
├── App.tsx
├── assets
│   ├── images
│   │   ├── auth-image.jpg
│   │   ├── logo-1.png
│   │   ├── logo-2.png
│   │   └── logo-3.png
│   └── svg
│       ├── excel.svg
│       ├── logo-copyright.svg
│       ├── logo-full.svg
│       ├── logo.svg
│       ├── no-data.svg
│       └── zip.svg
├── components
│   ├── index.ts
│   ├── svg
│   │   ├── ExcelIcon.tsx
│   │   ├── ZipIcon.tsx
│   │   └── index.ts
│   └── useStepper.tsx
├── configs
│   ├── const
│   │   ├── index.ts
│   │   ├── path.ts
│   │   ├── storageKey.ts
│   │   └── user.ts
│   ├── data
│   │   ├── index.ts
│   │   ├── menu.ts
│   │   └── routes.tsx
│   └── index.ts
├── forms
│   ├── auth
│   │   ├── auth.validator.ts
│   │   └── useLogin.form.tsx
│   ├── base.validator.ts
│   └── helper.tsx
├── hooks
│   ├── index.ts
│   ├── useDayjs.tsx
│   ├── useDebounce.tsx
│   ├── useFullScreenElement.tsx
│   ├── usePositionElement.tsx
│   └── useRoute.tsx
├── layouts
│   ├── auth
│   │   └── Auth.layout.tsx
│   └── insider
│       ├── AccountDropdown.tsx
│       ├── Breadcrumb.tsx
│       ├── Header.tsx
│       ├── Insider.layout.tsx
│       ├── Logout.tsx
│       ├── NavigateItem.tsx
│       └── SwitchThemeMode.tsx
├── main.tsx
├── modules
│   ├── auth
│   │   ├── Signin.module.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── others
│       ├── FallbackDefault.tsx
│       ├── Logo.tsx
│       ├── LogoCopyright.tsx
│       ├── LogoFull.tsx
│       └── index.ts
├── pages
│   ├── Home.tsx
│   ├── auth
│   │   ├── SignIn.tsx
│   │   └── index.tsx
│   └── index.tsx
├── services
│   ├── index.ts
│   └── main
│       ├── axios.ts
│       ├── client.ts
│       ├── endpoint
│       │   ├── index.ts
│       │   └── other.ts
│       ├── index.ts
│       ├── mutate
│       │   ├── auth.ts
│       │   └── index.ts
│       └── query
│           ├── index.ts
│           └── me.ts
├── states
│   ├── global.state.ts
│   └── route.state.ts
├── themes
│   ├── common
│   │   ├── colors.ts
│   │   └── index.ts
│   ├── components
│   │   ├── Dialog
│   │   │   ├── Modal.ts
│   │   │   └── index.ts
│   │   ├── Popover.ts
│   │   ├── index.ts
│   │   └── others.ts
│   ├── index.ts
│   └── scss
│       ├── libs
│       │   ├── index.scss
│       │   ├── perfect-scroll.scss
│       │   └── scroll.scss
│       └── style.scss
├── types
│   ├── declare
│   │   ├── global.d.ts
│   │   ├── user.d.ts
│   │   └── yup.d.ts
│   ├── export
│   │   ├── navigate.e.ts
│   │   └── other.e.ts
│   └── index.ts
├── utils
│   ├── index.ts
│   ├── number.ts
│   ├── object.ts
│   └── other.ts
└── vite-env.d.ts
```