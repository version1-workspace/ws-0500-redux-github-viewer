import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const IssueItem = ({ issue }) => {
  const { id, title, status, assignee, createdAt, updatedAt } = issue
  return (
    <tr key={id}>
      <td>
        <input type="checkbox" />
      </td>
      <td className="outline">{title}</td>
      <td>
        <select value={status}>
          <option value="0">Open</option>
          <option value="1">Close</option>
        </select>
      </td>
      <td>{assignee}</td>
      <td>{dayjs(createdAt).format('MM-DD-YYYY')}</td>
      <td>{dayjs(updatedAt).format('MM-DD-YYYY')}</td>
    </tr>
  )
}

IssueItem.propTypes = {
  issue: PropTypes.object
}

export default IssueItem
