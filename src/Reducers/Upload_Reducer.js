
const initial_state = {
  image : [
    {
      url : 'image_url'
    }
  ]
}

const Image_Upload = (state = initial_state.image,action) => {
  switch(action.type){
    case 'UPLOAD' :
      return [
        ...state,
        {
          url : action.url
        }
      ]
    default :
      return state;
  }
}

export default Image_Upload;
