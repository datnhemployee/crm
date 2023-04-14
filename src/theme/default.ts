import { ThemeConfig } from "antd"

export type TTheme = ThemeConfig & {
  token: ThemeConfig["token"] & {
    iconSizeL?: string
    iconSizeM?: string
    iconSizeS?: string
    tableColorBgHeader?: string
    colorIconDark?: string
  }
}

const TableTheme: ThemeConfig = {
  token: {
    colorFillContent: "#174579",
    colorFillSecondary: "#174579",
    colorBorderSecondary: "#174579",
    colorBgTextHover: "#d3dae0",
    colorIcon: "#d3dae0",
    colorIconHover: "#d3dae0",
  },
}

const defaultTheme: TTheme = {
  token: {
    iconSizeL: "40px",
    iconSizeM: "40px",
    iconSizeS: "24px",
    colorPrimary: "#174579",
    tableColorBgHeader: "#174579",

    colorIconDark: "#d3dae0",
  },
  components: {
    Layout: {
      colorBgHeader: "#174579",
    },
    Table: {
      colorTextHeading: "white",
    },
  },
}

export default defaultTheme
export { TableTheme }
