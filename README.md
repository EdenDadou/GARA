### Item Name: Gogo React Admin Theme
### Author: ColoredStrategies
### Version: 4.0.0

This documentation is to help you regarding each step of customization and get you started. Please go through the documentation carefully to understand how this template is made and how to edit this properly. HTML, Sass, Javascript and React knowledge is required to customize this template.

If you require any assistance you may reach us from comments section of the theme or write to us from contact form at our profile page.

For more doc please read this : https://gogo-react-docs.coloredstrategies.com/docs/guides


The theme comes with 3 separate projects. Gogo-React, Gogo-React-Start, Gogo-React-Start-With-Auth.

## Gogo-React
This is the main project that displayed at the preview. It contains all the components, redux and authorization.

## Gogo-React-Start
This one contains only necessary files to run this theme, mostly theme files and redux. The documentation is made by using this project. It is a lightweight project to get you started. You may need to add components that you want to use from npm or main project directory.

## Gogo-React-Start-With-Auth
This one is also a starter project but it also contains authorization. You may think this one as Gogo-React-Start + authorization.

# Lifecycle
Gogo is designed to make learning curve as short as possible while providing flexibility. We tried to provide clean and understandable code by separating data from views and logic.

This part of the documentation will answer your questions about basic lifecycle of the project and provide some insights about files.

## src/index.js

Default entry point of the application. It loads theme style and includes AppRenderer to the project.

Styling for plugins which will be used throughout the project are included here. For example, Bootstrap style file included and overridden by theme styling file.

Default color theme value is retrieved and style file loaded at this file. The value of the default theme is located at src/constants/dafaultValues.js file. Other theme related settings are also located at the defaultValues file.

## src/AppRenderer.js

This is the file which loads src/App.js after theme styling is done. It is the second file on lifecycle and act as a Middleware to initialize React Dom rendering.

## src/App.js

First job of this file is to load plugins and libraries which don't have any connection with a layout. These plugins an libraries are Firebase, ColorSwitcher and NotificationContainer.

This file also acts as a first route of the project. It makes authorization control via AuthRoute function and also makes necessary route direction to sub routes.

## src/views/index.js

If the project should have a home or a landing page, this is the place where it should be rendered. We have created the file to act as a guidance but since the project does not contain a home file, it only redirects to "app" route.

## src/views/error.js

A page to show customized page for errors. The routes that can not be found redirected to this page.

## src/views/app/index.js

Application related pages(except authorization) are decorated with AppLayout at this page. It also creates routing with a switch case to its sub directories.

### src/views/app/applications
### src/views/app/dashboards
### src/views/app/menu
### src/views/app/pages
### src/views/app/ui

All the index.js files under these directories manages routing separately. This routing process allows easily creating sub layouts if it is necessary. Other files than index.js are sub pages of the project.

## src/views/user/index.js


Authorization related pages are decorated with UserLayout at this file. It is the second layout of the project and does a similar job with AppLayout. If you require another distinct layout for your project you may follow this approach.
All routing to sub files under this directory is done by the file with a switch.

# Routing
We have tried to provide the routing structure as flexible as possible. Excluded data from logic and view to create ease of use.

Routing process requires 3 other mechanism to work. One of them is router plugin which provides decision codes to forward urls. Other two is menu and navlinks.

## Router

Routing is done by react-router-dom implementation and this plugin put in use at App.js file. All the index.js files under views folder and its sub folder also contains routing mechanism.

Basic routing process is done by below code block. It is a switch case to test urls and load matching components. Most of the components below are index.js files under src/views folder.

<Router>
  <Switch>
    <AuthRoute path="/app" authUser={loginUser} component={app} />
    <Route path="/user" component={user} />
    <Route path="/error" exact component={error} />
    <Route path="/" exact component={main} />
    <Redirect to="/error" />
  </Switch>
</Router>


## Menu

We created a very useful and functional menu for this theme. It has 2 divisions. One for main items and another one for sub items.

Menu has 3 different use cases which you may examine under Menu/MenuTypes section of the theme. To set a menu type, you need to change defaultMenuType variable at src/constants/defaultValues.js one of the following values: menu-default, menu-sub-hidden, menu-hidden

When the screen size changes, theme auto sets menu type itself. These exact screen size values are defined with subHiddenBreakpoint and menuHiddenBreakpoint variables at src/constants/defaultValues.js file.

src/containers/layout/Sidebar.js is the structure and logic file of the menu. Normally you should not feel the need to modify this file since data of the menu is located at src/constants/menu.js and this data file provides a clean good way to create and modify the menu.

src/constants/menu.js file basically contains an array of objects. These objects provides various properties to define and modify a menu item.

Below is the menu data structure.

{
  id: "dashboards",             Id of the main menu item(Must be unique)
  icon: "iconsminds-shop-4",    Icon class
  label: "menu.dashboards",     Language file id
  to: "/app/dashboards",        Route to navigate
  newWindow: false              Opens the url in new window when set to true
  subs: [                       Sub items
    {
      icon: "simple-icon-briefcase",        
      label: "menu.default",
      to: "/app/dashboards/default",
      subs: []
    },
    ...
  ]
},


## Links

You may create your links throughout the project via NavLink component. It allows you to define an active class and works in a harmony with router.

import { NavLink } from "react-router-dom";
<NavLink to="/app/dashboards">Dashboards</NavLink>

# Redux
Information shared across the theme via Redux and Redux Saga. As an example, left menu icon is different for mobile view and large screen view. This is shared via Redux. Also multi language works thanks to Redux. Redux Saga used for login controls and application modules. All the Redux related code is located under redux folder categorized by used modules.

## Example Structure

redux/todo
  actions.js
  reducers.js
  saga.js


Example Usage

render() {
  const { locale } = this.props; //This is mapped from Redux state to component props via below code block
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(MyComponent);

# Layout
## /layout

There are two different main layout for src/views/app and src/views/user directories and these are located at src/views/app/index.js and src/views/user/index.js file. You may create your own routes if you need a different layout by following this routine. These layouts encapsulates all the pages under their route.

If you would like to create a landing page, you may use src/views/index.js file to include your own components and containers.

## /containers

These folder contains smart components that may contain logic, view and other components. 
They are divided into logical sub folders providing a hint about their usage place. You may also create new ones or modify existing containers for your project needs.

## /components

These folder contains dumb components which are mostly made to provide view. 
They receive their data from outside of themselves and used throughout the project and in containers.
These are also divided into sub folders.

# Language 
Translation and language requirements are provided via react-intl plugin.

Language related files are located at src/lang folder. 
src/lang/entries subfolder contains language definitions while src/lang/locales folder contains words and sentences.
index.js file uses **addLocaleData** function of react-intl plugin.

Default language of the project is set from src/constants/defaultValues.js file with **defaultLocale** variable.
This variable should be the if from **localeOptions** variable. **localeOptions** at this file contains langage label and its shorthand usage.

Basic Usage

If it is not a problem to use a return value which contains a span tag, then you may use it like below example.

import IntlMessages from "../../helpers/IntlMessages";

render() {
  return () {
    <div><IntlMessages id="dashboards.cakes" /></div>
  }
}


Injection

If using the value with a span tag is problem and you need the exact value, below example is the way. This is a little more complicated than basic usage and components should be bound with injectInt when exported. When used this way, component props receive a variable called intl and all the defined language values can be reached via this prop.

import { injectIntl } from "react-intl";

render() {
  const { messages } = this.props.intl;
  return() {
  <input type="text" placeholder={messages["menu.search"]} />
  }
}

export default injectIntl(MyComponent);

# Styling

The theme uses Sass for creating stylesheets.

Main style file is **css/sass/_gogo.style.scss**. There is one helper file which is **css/sass/_mixins.scss**.

There are also 10 scss files located under css/sass/themes folder. 
This files creates theme specific variables and imports **_gogo.style.scss** and **_mixins.scss** files to create final version as a css file.

Gogo.style.scss file is a single divided into several logical parts. It is well commented.

## Define a Color

There are some predefined colors in every scss theme file. For consistency there is no color definition in javascript files. Css files write color values to ":root" and javascript reads from there. In gogo.script.js file you may examine the part Getting Colors from CSS.

To define additional colors, these are the steps to follow.

    Define color in theme scss file. For example create a variable in gogo.light.purple.scss file as

    $theme-color-7: #ff00ff;

    At the "01.Base" section of _gogo.style.scss write the variable to ":root" like this.

    --theme-color-7: #{$theme-color-7};

    After this step new color is ready to be used in javascript. With the following code you may retrieve the color.

     rootStyle.getPropertyValue("--theme-color-7").trim()


## Xxs & Xxl Classes

This theme uses two additional Bootstrap column classes to provide a better responsive experience. xxs class is for under 420px and xxl class is for over 1440px. Here is the list of responsive breakpoints as pixel values.

xxs : --419
xs   : 420-575
sm   : 576-767
md   : 768-991
lg   : 992-1119
xl   : 1200-1439
xxl  : 1440++


# Librairies
## react

A JavaScript library for building user interfaces

https://reactjs.org


## reactstrap

Easy to use React Bootstrap 4 components

https://reactstrap.github.io


## redux

A predictable state container for JavaScript apps.

https://redux.js.org


## availity-reactstrap-validation

Easy to use form validation for reactstrap.

https://availity.github.io/availity-reactstrap-validation/

Usage: src/containers/form-validations/AvailityBasic.js


## axios

Promise based HTTP client for the browser and node.js.

https://github.com/axios/axios

Usage: src/views/app/pages/data-list.js


## classnames

A simple JavaScript utility for conditionally joining classNames together.

https://github.com/JedWatson/classnames

Usage: src/components/common/react-notifications/Notification.js


## firebase

Firebase lets you build more powerful, secure and scalable apps, using world-class infrastructure.

https://firebase.google.com

Usage: src/redux/auth/saga.js
Config: src/constants/defaultValues.js
Helper: src/helpers/Firebase.js


## formik

Advanced form validations for React.

https://github.com/jaredpalmer/formik

Usage: src/containers/form-validations/FormikBasicFieldLevel.js


## moment

Parse, validate, manipulate, and display dates and times in JavaScript.

https://momentjs.com

Usage: src/containers/forms/DatePickerExamples.js


## mousetrap

A simple library for handling keyboard shortcuts in Javascript.

https://craig.is/killing/mice

Usage: src/views/app/pages/data-list.js


## rc-slider

Slider ui component for React.

https://github.com/schrodinger/rc-slider

Usage: src/components/common/SliderTooltips.js


## rc-switch

Switch ui component for react.

https://github.com/react-component/switch

Usage: src/containers/forms/SwitchExample.js


## react-autosuggest

WAI-ARIA compliant React autosuggest component.

https://github.com/moroshko/react-autosuggest

Usage: src/components/common/ReactAutoSuggest.js


## react-big-calendar

An events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach.

https://github.com/intljusticemission/react-big-calendar

Usage: src/containers/dashboards/Calendar.js


react-chartjs-2

## React wrapper for Chartjs.

https://github.com/jerairrest/react-chartjs-2

Usage: src/components/charts/Area.js
Config: src/components/charts/config.js
Data: src/data/charts.js


## react-circular-progressbar

A circular progress indicator.

https://github.com/kevinsqi/react-circular-progressbar

Usage: src/components/cards/RadialProgressCard.js


## react-contextmenu

Context Menu implemented in React.

https://github.com/vkbansal/react-contextmenu

Usage: src/containers/pages/DataListView.js


## react-datepicker

A simple and reusable datepicker component for React.

https://github.com/Hacker0x01/react-datepicker

Usage: src/containers/forms/DatePickerExamples.js


## react-dom

The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to.

https://reactjs.org/docs/react-dom.html

Usage: src/AppRenderer.js


## react-dropzone-component

ReactJS Dropzone for file uploads.

https://github.com/felixrieseberg/React-Dropzone-Component

Usage: src/containers/forms/DropzoneExample.js


## react-google-maps

React Google Maps integration component.

https://github.com/tomchentw/react-google-maps

Usage: src/views/app/ui/maps.js


## react-intl

React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

https://github.com/formatjs/react-intl

Basic: src/views/app/blank-page.js
Inject: src/views/app/dashboards/content.js


## react-perfect-scrollbar

A react wrapper for perfect-scrollbar.

https://github.com/goldenyz/react-perfect-scrollbar

Usage: src/containers/dashboards/Ticket.js


## react-quill

A Quill component for React.

https://github.com/zenoamaro/react-quill

Usage: src/views/app/ui/editors.js


## react-rater

Interactive & customizable star rater.

https://github.com/NdYAG/react-rater

Usage: src/components/common/Rating.js


## react-redux

Official React bindings for Redux.

https://react-redux.js.org

Usage: src/App.js


## react-router-dom

Declarative routing for React.

https://github.com/ReactTraining/react-router

Usage: src/App.js


## react-select

The Select Component for React.

https://github.com/jedwatson/react-select

Usage: src/containers/forms/ReactSelectExample.js


## react-sortablejs

A React component built on top of Sortable.

https://github.com/SortableJS/react-sortablejs

Usage: src/views/app/ui/sortable.js


## react-table

Hooks for building fast and extendable tables and data grids for React.

https://github.com/tannerlinsley/react-table/tree/v6

Usage: src/containers/dashboards/BestSellers.js


## react-tagsinput

Highly customizable React component for inputing tags.

https://github.com/olahol/react-tagsinput

Usage: src/containers/forms/TagsInputExample.js


## react-transition-group

An easy way to perform animations when a React component enters or leaves the DOM.

https://github.com/reactjs/react-transition-group

Usage: src/components/common/react-notifications/Notifications.js


## react-yandex-maps

Yandex Maps API bindings for React.

https://github.com/gribnoysup/react-yandex-maps

Usage: src/views/app/ui/maps.js


## redux-saga

An alternative side effect model for Redux apps.

https://github.com/redux-saga/redux-saga

Usage: src/redux/auth/saga.js


## yup

Dead simple Object schema validation.

https://github.com/jquense/yup

Usage: src/containers/form-validations/FormikCustomComponents.js