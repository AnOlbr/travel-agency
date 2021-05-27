import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationTimeFrom, changeDurationTimeTo, removeTag, addTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTag: tags => dispatch(addTag(tags)),
  removeTag: tags => dispatch(removeTag(tags)),
  changeDurationTimeFrom: duration => dispatch(changeDurationTimeFrom(duration)),
  changeDurationTimeTo: duration => dispatch(changeDurationTimeTo(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
