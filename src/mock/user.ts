const mapUserAsStringToUser = (userAsString: string) => {
  const splitted = userAsString.split("\t")
  const lastName = splitted?.[0]
  const firstName = splitted?.[1]
  const userName = splitted?.[2]
  const position = splitted?.[3]
  const email = splitted?.[4]
  const phone = splitted?.[5]
  const gender = splitted?.[6]
  const dateOfBirth = splitted?.[7]
  const joiningDate = splitted?.[8]
  const endDate = splitted?.[9]
  const identifier = splitted?.[10]
  const placeOfId = splitted?.[11]
  const permanentAddress = splitted?.[12]
  const currentAddress = splitted?.[13]
  const area = splitted?.[14]
  const taxCode = splitted?.[14]
  return {
    lastName,
    firstName,
    userName,
    position,
    email,
    phone,
    gender,
    dateOfBirth,
    joiningDate,
    endDate,
    identifier,
    placeOfId,
    permanentAddress,
    currentAddress,
    area,
    taxCode,
  }
}

const MOCK_USER_LIST = [
  {
    id: "a9ad58a8-5e86-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9374-7413-e053-030011ace87b",
    userName: "DSA014894",
    firstName: "Tăng",
    lastName: "Thị Mỹ Tuyên",
    fullName: "Tăng Thị Mỹ Tuyên",
    gender: "FEMALE",
    email: "XYZ@gmail.com",
    phoneNumber: "1231223321",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-10-20T00:00:00",
    hrCode: "DSA14858",
    leaderCode: "DST0365",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    avatarUrl: "avatar/701436db-3066-4d80-90d0-f5ce5d68f5ed.jpg",
    avatarObjectId: "99b4d0a9-bbf9-f1e3-e053-49785b0a5c41",
    channel: {
      id: "da3e31a8-0591-6e40-e053-030011ac3542",
      name: "POS",
      description: "POS",
    },
    position: {
      id: "de3e31a8-bfa1-7640-e053-030011ace7c5",
      channelId: "da3e31a8-0591-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "Agent",
      description: "Agent",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    taxCode: "3",
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6086-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9574-7413-e053-030011ace87b",
    userName: "DSA014895",
    firstName: "Lê",
    lastName: "Toàn Định",
    fullName: "Lê Toàn Định",
    gender: "MALE",
    phoneNumber: "0000000000",
    joiningDate: "2020-04-02T00:00:00",
    hrCode: "DSA14859",
    leaderCode: "DST0236",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6286-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9774-7413-e053-030011ace87b",
    userName: "DSA014896",
    firstName: "Nguyễn",
    lastName: "Thiện Quý",
    fullName: "Nguyễn Thiện Quý",
    gender: "NONE",
    email: "aefw@yopmail.com",
    phoneNumber: "2222222222",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-10-20T00:00:00",
    hrCode: "DSA14860",
    leaderCode: "DST0332",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: true,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6486-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9974-7413-e053-030011ace87b",
    userName: "DSA014897",
    firstName: "Trần",
    lastName: "Quốc Tùng",
    fullName: "Trần Quốc Tùng",
    gender: "FEMALE",
    email: "test@yopmail.com",
    phoneNumber: "2222222222",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2021-01-13T00:00:00",
    hrCode: "DSA14861",
    leaderCode: "DST0333",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6686-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9b74-7413-e053-030011ace87b",
    userName: "DSA014898",
    firstName: "Mai",
    lastName: "Văn Trường",
    fullName: "Mai Văn Trường",
    gender: "NONE",
    email: "a@a.com",
    phoneNumber: "0934555555",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-09-17T00:00:00",
    hrCode: "DSA14862",
    leaderCode: "DST0334",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    permanentAddress: "1",
    currentAddress: "1",
    disabled: true,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6886-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9d74-7413-e053-030011ace87b",
    userName: "DSA014899",
    firstName: "Lê",
    lastName: "Thị Thúy Hằng",
    fullName: "Lê Thị Thúy Hằng",
    gender: "NONE",
    email: "a1@a.com",
    phoneNumber: "0934555555",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-10-20T00:00:00",
    hrCode: "DSA14863",
    leaderCode: "DST0334",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    permanentAddress: "123",
    currentAddress: "123",
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6a86-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-9f74-7413-e053-030011ace87b",
    userName: "DSA014900",
    firstName: "Phạm",
    lastName: "Thanh Thúy",
    fullName: "Phạm Thanh Thúy",
    gender: "NONE",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-09-17T00:00:00",
    hrCode: "DSA14864",
    leaderCode: "DST0334",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: true,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6c86-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-a174-7413-e053-030011ace87b",
    userName: "DSA014901",
    firstName: "Trương",
    lastName: "Thị Bạc",
    fullName: "Trương Thị Bạc",
    gender: "NONE",
    joiningDate: "2020-04-02T00:00:00",
    hrCode: "MAFCOS2591",
    leaderCode: "DST0551",
    area: "West",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d1c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378ee-a617-11ea-b2b9-b42e9987a03b",
      name: "Staff",
      description: "Staff",
    },
    roles: [
      {
        id: "057378ee-a617-11ea-b2b9-b42e9987a03b",
        name: "Staff",
        normalizedName: "STAFF",
        description: "Staff",
        permissions: [
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-6e86-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-a374-7413-e053-030011ace87b",
    userName: "DSA014902",
    firstName: "Lê",
    lastName: "Thị Hiếu",
    fullName: "Lê Thị Hiếu",
    gender: "NONE",
    email: "hungkt199x@gmail.com",
    phoneNumber: "0347902201",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-10-20T00:00:00",
    hrCode: "DSA14866",
    leaderCode: "DST0032",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0291-6e40-e053-030011ac3542",
      name: "ALL",
      description: "ALL",
    },
    position: {
      id: "93f2f5a8-6071-ac14-e053-020011ac255f",
      channelId: "da3e31a8-0291-6e40-e053-030011ac3542",
      roleId: "057378cf-a617-11ea-b2b9-b42e9987a03b",
      name: "Product Box Admin",
      description: "Product Box Admin",
    },
    roles: [
      {
        id: "057378cf-a617-11ea-b2b9-b42e9987a03b",
        name: "Product Box Admin",
        normalizedName: "PRODUCT BOX ADMIN",
        description: "Product Box Admin",
        permissions: [
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "f1cca8a8-1c21-4fd1-89d1-cd03de4d52a3",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "REPORT - WRITE",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: false,
    maxDayCanEdit: 0,
  },
  {
    id: "a9ad58a8-7086-d91c-e053-030011ac2257",
    employeeId: "9d4658a8-a574-7413-e053-030011ace87b",
    userName: "DSA014903",
    firstName: "Lê",
    lastName: "Trương Hiền Thanh",
    fullName: "Lê Trương Hiền Thanh",
    gender: "NONE",
    email: "tathung095@gmail.com",
    phoneNumber: "0347902201",
    joiningDate: "2020-04-02T00:00:00",
    endingDate: "2020-10-20T00:00:00",
    hrCode: "DSA14867",
    leaderCode: "DST0336",
    identifierType: "OTHER",
    referencePositionId: "00000000-0000-0000-0000-000000000000",
    channel: {
      id: "da3e31a8-0391-6e40-e053-030011ac3542",
      name: "DRS",
      description: "DRS",
    },
    position: {
      id: "dd3e31a8-d3c4-7240-e053-030011ac02dc",
      channelId: "da3e31a8-0391-6e40-e053-030011ac3542",
      roleId: "057378f2-a617-11ea-b2b9-b42e9987a03b",
      name: "PTAgent",
      description: "Part Time Agents",
    },
    roles: [
      {
        id: "057378f2-a617-11ea-b2b9-b42e9987a03b",
        name: "Agent",
        normalizedName: "AGENT",
        description: "Agent or Full Time Agent or Part Time Agent",
        permissions: [
          {
            id: "55ea51b2-3c4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "LOAN_APPLICATION - READ",
          },
          {
            id: "6796364b-ba46-4ef2-ada9-83e7d227c54f",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "SALES_PERFORMANCE - WRITE",
          },
          {
            id: "681ab965-d7c8-4384-89d5-28f46ba23c70",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "NOTE - WRITE",
          },
          {
            id: "25417ec8-8c6e-48a9-8b85-2e2988395ad0",
            feature: {
              id: 6,
              name: "NOTE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "NOTE - READ",
          },
          {
            id: "feed1eac-7c0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "USER - READ",
          },
          {
            id: "966733d6-3e55-4ed7-a128-4628bd7d8e3e",
            feature: {
              id: 2,
              name: "SALES_PERFORMANCE",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "SALES_PERFORMANCE - READ",
          },
          {
            id: "feed1eac-7d0f-7246-e053-3e095b0a9db7",
            feature: {
              id: 8,
              name: "USER",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "USER - WRITE",
          },
          {
            id: "55ea51b2-3d4b-c5b1-e053-49785b0aa428",
            feature: {
              id: 9,
              name: "LOAN_APPLICATION",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "LOAN_APPLICATION - WRITE",
          },
          {
            id: "711c65e6-2760-4e00-bcf4-8b5f78bdcc0d",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "PRODUCT_BOX - READ",
          },
          {
            id: "01547aa9-80f3-4cb7-a551-ac6acc296278",
            feature: {
              id: 4,
              name: "PRODUCT_BOX",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "PRODUCT_BOX - WRITE",
          },
          {
            id: "8cc1b59d-0950-46ee-9387-0716c42b89a7",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "CHAT - READ",
          },
          {
            id: "57a1fbab-a31b-4762-b0ca-fb7b78f8c689",
            feature: {
              id: 7,
              name: "CHAT",
            },
            permission: {
              id: 3,
              name: "WRITE",
            },
            description: "CHAT - WRITE",
          },
          {
            id: "b4fb6ec1-ee56-4023-b571-6293e50a7df2",
            feature: {
              id: 5,
              name: "REPORT",
            },
            permission: {
              id: 2,
              name: "READ",
            },
            description: "REPORT - READ",
          },
        ],
      },
    ],
    canViewWholeCompany: false,
    canViewWholeChannel: false,
    disabled: false,
    maxDayCanEdit: 0,
  },
]

export default MOCK_USER_LIST
