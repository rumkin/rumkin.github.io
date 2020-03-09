export function resolve(url) {
  switch (url) {
    case '/':
    case '/home':
      return {
        route: {
          params: {}
        },
        component: 'mainPage',
      }
    default:
      return {
        route: {
          params: {}
        },
        component: 'notFoundPage',
      }
  }
}
