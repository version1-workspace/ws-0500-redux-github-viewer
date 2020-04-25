import { connect } from 'react-redux'
import IssueTab from '../components/templates/Issue'

const mapStateToProps = ({ ui: { modal } }) => {
  return {
    data: modal.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTab)
