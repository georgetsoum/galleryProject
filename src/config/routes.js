/*
Routes are defined here.
Each route corresponds to a specific page component
(found in the pages directory),
and is used to navigate to the page using the wouter package.
*/
export const routes = {
  intro: '/',
  exhibitions: '/exhibitions',
  exhibition : '/exhibition/:exhibitionid',
  exhibit: '/exhibition/:exhibitionid/exhibit/:exhibitid',
  //exhibition : '/exhibition/:id/exhibit/:id',
  // TODO add rest of the routes here
}