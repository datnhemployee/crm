import dayjs from "dayjs"
import React from "react"
import Lodash from "utils/lodash"

type User = {
  key: React.Key
  id?: string
  employeeId?: string
  userName?: string
  firstName: string
  lastName: string
  fullName: string
  gender: string
  email: string
  phoneNumber: string
  joiningDate: string
  endingDate: string
  hrCode: string
  leaderCode: string
  identifierType: string
  referencePositionId: string
  avatarUrl: string
  avatarObjectId: string
  channel: {
    id: string
    name: string
    description: string
  }
  position: {
    id: string
    channelId: string
    roleId: string
    name: string
    description: string
  }
  roles: {
    id: string
    name: string
    normalizedName: string
    description: string
    permissions: {
      id: string
      feature: {
        id: 9
        name: string
      }
      permission: {
        id: 2
        name: string
      }
      description: string
    }[]
  }[]
  canViewWholeCompany: boolean
  canViewWholeChannel: boolean
  taxCode: string
  disabled: boolean
  maxDayCanEdit: number
}

type UserForm = Omit<User, "position" | "joiningDate" | "endingDate"> & {
  joiningDate?: dayjs.Dayjs
  endingDate?: dayjs.Dayjs
  position?: string
}

export const createUserForm = (user: User): UserForm => {
  const clone: User = Lodash.deepClone(user)
  const form: UserForm = {
    ...clone,
    endingDate: clone.endingDate ? dayjs(clone.endingDate) : undefined,
    joiningDate: clone.joiningDate ? dayjs(clone.joiningDate) : undefined,
    position: clone.position?.name,
  }
  return form
}

export default User
