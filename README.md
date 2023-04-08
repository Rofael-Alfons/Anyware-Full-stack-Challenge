# Anyware-Software-Fullstack-Task

## Entrepreware (Fullstack Challenge)

### Project Spec:

NumVerify is a free API that allows you to verify the validity of a phone number and provide information about it.
Create a full-stack application using (React and Redux) for the frontend part, and (Express.js or Nest.js and MongoDB) for the backend.

### Frontend Part:

- [x] Login Page.
- [x] Only logged-in users should be able to access the Search Page. Create a log-in button on the login page that allows the user to log in with any username or password. Create a Higher Order Component (HOC) called requireAuth that only shows the search component to logged-in users and redirects non-logged-in users to the login page.
- [x] A history page to display all of the numbers entered into the system and their results, this page should also have filters (phone number, date, status, etc.).
- [x] The whole challenge should be responsive and can fit to any screen size.
- [x] The application must be built using reusable components as much as you can.
      on it.
- [x] Use CSS3 and your preferred server-side CSS pre-processing platforms, such as LESS and SASS.
- [x] Prepare your application to be translated in the future using the i10n concept and packages.
- [-] Use your favorite test library to apply unit tests and integration tests to verify your code.
- [x] There is no restriction on the colors and the fonts. (Use your own favorites)

### Backend Part:

- [x] Create a web service that will be used to search for phone number.
- [x] Create a web service that will be used to save search result.
- [x] Create a web service that will be used to retrieve all history data.

## Notes:

- Used Redux toolkit
- Generated token for user
- Protected routes to prevent users from navigating to it
- Used axios library to fetch data
- Used react data table component library to view the data in Table
