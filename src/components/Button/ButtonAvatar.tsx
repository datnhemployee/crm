import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import { Space, Upload } from "antd"
import { RcFile } from "antd/es/upload"
import Language from "lang"
import React, { useState } from "react"
import styled from "styled-components"
import Promisy from "utils/promisy"

type ButtonUploadAvatarProps = {}

const AvatarWrapper = styled(Space)`
  padding: 4px;
`

const getUrl = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log("onload", reader.result)
      resolve(reader.result as string)
    }
    reader.onerror = (error) => {
      console.log("onerror", error)
      reject(error)
    }
  })

const ButtonUploadAvatar: React.FunctionComponent<ButtonUploadAvatarProps> = (
  props
) => {
  const [isLoading, setLoading] = useState(false)
  const [url, setUrl] = useState("")

  const mockOnChange =
    (
      ignore: React.ComponentProps<typeof Upload>["onChange"]
    ): React.ComponentProps<typeof Upload>["onChange"] =>
    async (info) => {
      try {
        setLoading(true)
        const [newUrl] = await Promise.all([
          getUrl(info.file.originFileObj as RcFile),
          Promisy.delay(),
        ])
        setUrl(newUrl)
      } catch (error) {
        console.log("mockOnChange-error", error)
      } finally {
        setLoading(false)
      }
    }

  const onChange: React.ComponentProps<typeof Upload>["onChange"] =
    mockOnChange(async (info) => {
      try {
        switch (info.file.status) {
          case "done":
            const newUrl = await getUrl(info.file.originFileObj as RcFile)
            setUrl(newUrl)
            setLoading(false)
            return

          case "error":
            setLoading(false)
            return

          case "uploading":
          default:
            setLoading(true)
            return
        }
      } catch (error) {
        console.log("onChange-error", error)
        setLoading(false)
      }
    })

  return (
    <Upload
      listType="picture-card"
      multiple={false}
      showUploadList={false}
      onChange={onChange}
    >
      <AvatarWrapper direction="vertical">
        {isLoading ? (
          <LoadingOutlined />
        ) : !url ? (
          <>
            <PlusOutlined />
            {Language.userManagement.uploadAvatar}
          </>
        ) : (
          <img src={url} alt="avatar" style={{ width: "100%" }} />
        )}
      </AvatarWrapper>
    </Upload>
  )
}

export default ButtonUploadAvatar
