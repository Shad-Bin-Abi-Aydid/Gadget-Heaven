# Gadget Heaven 

Gadget Heaven is a modern React-based web application for browsing and discovering the latest tech gadgets. Users can explore products by category, view detailed gadget information, and navigate seamlessly using React Router.

## Live Link

[https://brilliant-khapse-42a48d.netlify.app/]


## Requirement Documents Link

[https://github.com/Shad-Bin-Abi-Aydid/Gadget-Heaven]


## 📁 Project Structure

The app is organized with a modular and scalable file structure, including the following main folders:
- `Pages/`: Contains main page components like Home, Statistics, Dashboard, and GadgetDetails.
- `components/`: Shared UI components like Navbar, Footer, Card, Category, ErrorPage, etc.
- `layout/`: Contains the `MainLayout` component that serves as the layout wrapper.
- `routes/`: Contains the route configuration using `react-router-dom`.


##  React Fundamentals Used

This project applies several React fundamentals:
- **JSX**: Writing HTML in JavaScript using JSX.
- **Components**: Functional components with props for reusability (`Card`, `Category`, `Navbar`, etc.).
- **Hooks**: 
  - `useState` for managing local component state.
  - `useEffect` for side effects like data fetching.
  - `useParams`, `useLoaderData`, and `useLocation` from React Router DOM for route-based logic.
- **React Router DOM**: Used for dynamic routing and navigation.
- **Props**: For passing data and rendering dynamic content.


##  Data Handling

- **Data Fetching**:
  - Product and category data are fetched from local `.json` files using loaders in `react-router-dom`.
- **Data Management**:
  - This project currently uses **React's built-in state management** (`useState`) for local data.



## Key Features

1. **Dynamic Routing**:  
   Implements nested routes, parameterized routes, error handling, and redirection using `react-router-dom`.

2. **Category-Based Filtering**:  
   Users can browse gadgets by category with dynamic filtering of product cards.

3. **Product Detail Page**:  
   Each gadget has its own detailed page, accessed via a dynamic route.

4. **Responsive Navigation**:  
   Responsive `Navbar` with dropdown support for mobile devices and active link styling.

5. **Error Handling**:  
   Friendly error page using `useRouteError` from React Router for broken or undefined routes.