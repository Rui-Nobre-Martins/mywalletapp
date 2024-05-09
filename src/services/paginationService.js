function pagination (limit, offset, total, tableNameParam) {

    const firstOffset = 0;
    const nextOffset = offset + limit;
    const previousOffset = offset - limit;
    const lastOffset = Math.floor((total / limit)) * limit - 1;
 
 
    let firstPage = null;
    let prevPage = null;
    let nextPage = null;
    let lastPage = null;
    
    
 

   if (previousOffset >= 0) {
       firstPage = `http://localhost:3000/${tableNameParam}/?limit=${limit}&offset=${firstOffset}`;
       prevPage = `http://localhost:3000/${tableNameParam}/?limit=${limit}&offset=${previousOffset}`;
   };
 
  
   if (offset > 0 && offset < limit) {
      firstPage = `http://localhost:3000/${tableNameParam}/?limit=${limit}&offset=${firstOffset}`;
      prevPage = firstPage;
   };
    
   if (nextOffset < total) {
      nextPage = `http://localhost:3000/${tableNameParam}/?limit=${limit}&offset=${nextOffset}`;
      lastPage = `http://localhost:3000/${tableNameParam}/?limit=${limit}&offset=${lastOffset}`;
   };
 
 
   return {
      firstPage: firstPage,
      previous: prevPage,
      next: nextPage,
      lastPage: lastPage
   };
 };
 
 
 
 module.exports = {
   pagination
 };