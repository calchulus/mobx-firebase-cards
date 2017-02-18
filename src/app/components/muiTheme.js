import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, cyan700, grey400} from 'material-ui/styles/colors';
let customTheme = {
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400
    },
    appBar: {
        height: 66,
    },
    bottomNavigation: {
        zIndex: 100,
    }
}

let theme = getMuiTheme(customTheme);

export default theme;
