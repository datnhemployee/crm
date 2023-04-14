import { Layout, Space, Typography } from "antd"
import Assets from "asset"
import Button from "components/Button"
import { useContext } from "react"
import { useLastestScreenName } from "routes"
import styled from "styled-components"
import { CollapseContext } from "./context"
import Icon from "components/Icon"
import Text from "components/Typography/Text"
const { Header } = Layout
const ContainerHeader = styled.div`
  height: 100%;
  display: flex;
`
const HeaderLeft = styled(Space)``
const Logo = styled.img`
  height: 40px;
  margin-left: 32px;
  margin-top: 12px;
  margin-bottom: 12px;
`
const ScreenName = styled(Typography.Title)`
  &.ant-typography {
    color: white;
    margin: 0px;
  }
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 12px;
`
const Line = styled.div`
  border-right: 1px solid white;
  height: 28px;
`
const MeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

type HeaderProps = {
  toggleCollapsed?: () => void
}

const HeaderContent: React.FunctionComponent<HeaderProps> = (props) => {
  const { toggleCollapsed } = useContext(CollapseContext)
  const latestScreenName = useLastestScreenName()

  return (
    <Header
      style={{
        paddingInline: 0,
      }}
    >
      <ContainerHeader>
        <HeaderLeft direction="horizontal">
          <Logo src={Assets.Logo} alt="logo" />
          <Button iconSrc={Assets.Hamburger} onClick={toggleCollapsed} />
          <ScreenName level={4}>{latestScreenName}</ScreenName>
        </HeaderLeft>

        <HeaderRight>
          <Space size="large">
            <Space size="small">
              <Icon type="png" src={Assets.App} size="small" />
              <Icon type="png" src={Assets.Bell} size="small" />
              <Icon type="png" src={Assets.VietNameFlag} size="small" />
            </Space>

            <Line />
            <Text color="white">Nguyen Minh Phuoc</Text>

            <Line />
            <MeWrapper>
              <Text color="white" strong>
                Lê Tú Quyên
              </Text>
              <Text color="white" align="right">
                Admin
              </Text>
            </MeWrapper>

            <Icon type="png" src={Assets.Avatar} size="large" />
          </Space>
        </HeaderRight>
      </ContainerHeader>
    </Header>
  )
}

export default HeaderContent
