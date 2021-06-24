- `components` - for reusable presentational components throughout the project. Which can be used independently just based on props. If some component is not used without a container, it is better to create it directly in the folder with the container. Example: `containers/LikeButtonContainer/LikeButton`.

- `containers` - for reusable containers throughout the project. Based on one presentational component, you can build several containers that are responsible for different logic in the application.

- `views` - for project pages. If we create a new route, the main component for it should be located in the "views" folder. We dont call it `pages` to avoid conflicts with frameworks which uses `pages` folder. 

If there is a need to create a separate component or container inside the page that will be used only on this page, it is better to do this right inside the folder with the page. Thus, we will not litter the `src/components` && `src/containers` folders.
For example: `views/Profile/ProfileHead`, the `ProfileHead` component is used only on the profile page, so we store it in the views folder.
If we need access to the storage, then create a container.