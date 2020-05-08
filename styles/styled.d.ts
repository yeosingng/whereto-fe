// import original module declarations
import 'styled-components'
import { myTheme } from './my-theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends myTheme{
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }
  }
}