const initialState = {
  data: {
    1: {
      id: 1,
      title: 'Issue 1',
      status: 0,
      assignee: 'jjoo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    2: {
      id: 2,
      title: 'Issue 2',
      status: 1,
      assignee: 'jjoo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    3: {
      id: 3,
      title: 'Issue 3',
      status: 0,
      assignee: 'jjoo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
}

const reducer = (state = initialState, action) => {
  return state
}

export default reducer
