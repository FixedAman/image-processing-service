const App = ()=>{
  const handleSubmit = ()=>{
    
  }
  return <>
 <div className="image_data">
 <form action="http://localhost:5173/upload" method="POST" encType="multipart/form-data" >
 <input type="file" name="mainImage" />
 <button onSubmit={handleSubmit}>submit</button>
 </form>
 </div>
  </>
}
export default App