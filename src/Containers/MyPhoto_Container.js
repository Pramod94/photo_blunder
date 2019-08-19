import { connect } from 'react-redux';
import { Image } from '../Actions/Image_Upload';
import MyPhotos from '../Components/MyPhotos';

const mapStateToProps = (state) => {
  return {
    image: state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    img: (url) => dispatch(Image(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (MyPhotos);
