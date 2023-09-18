const BigNum = ({ posts })=> {
  let postNums = posts.filter(item => (item.price*1).toFixed(2) !== 'NaN');
  let maxNum = -1;
  let maxPost = {}
  
  posts.map((item) => {
    if(parseInt(item.price) > maxNum) {
      maxNum = parseInt(item.price)
      maxPost = item
    };
  });
  return (
  <>
  <br/>
    <div className='detailContact'>
      <h1>The Most Expensive Post is priced at: {maxNum}</h1>
      <h3>Details:</h3>
      <p>Title: { maxPost.title }</p><p>User: {maxPost.author.username} is rich</p>
        <p>Description: {maxPost.description}</p>
        <p>Location: {maxPost.location}</p>
    </div>
  </> 
  );
    
 
}

export default BigNum