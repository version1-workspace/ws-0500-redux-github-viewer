import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const IssueItem = ({ checked, onCheck, issue }) => {
  const { id, title, status, assignee, createdAt, updatedAt } = issue
  const _onCheck = useCallback(() => {
    onCheck(issue)
  }, [issue, onCheck])
  return (
    <tr key={id}>
      <td>
        <input type="checkbox" checked={checked} onClick={_onCheck} />
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
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  issue: PropTypes.object
}

export default IssueItem
