const App = ()=>{
  
  return <>
 <div className="image_data">
 <form action="http://localhost:8000/api/image/submit" method="POST" encType="multipart/form-data" >
 <input type="file" name="mainImage" />
 <button type="submit">submit</button>
 </form>
 </div>
  </>
}
export default App