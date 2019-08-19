import React from 'react';

// const MyPhotos = ({ img, image }) => {
//   console.log(img);
//   console.log(image);
//   return (
//     <div>
//       <input 
//       type="file"
//       onChange={img}
//       />
//       <img src="#" alt="Image"/>
//       {image.map(img => <img src={img.url} alt="Image" />)}
//     </div>
//   )
// }

class MyPhotos extends React.Component{
  
  handleChange = (e) => {
    let input = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(input);
    reader.onload = function(){
      let img = document.getElementById('output');
      img.src = reader.result;
    }
  }
  render(){
    return(
      <div>
        <input type="file" onChange={(e) => this.handleChange(e)}/>
        <div>
        <img id="output" width="800px" height="500px"/>
        </div>
      </div>
    )
  }
}

export default MyPhotos;


{/* 
<input type='file' accept='image/*' onchange='openFile(event)'><br>
<img id='output'>
<script>
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
</script>
*/}