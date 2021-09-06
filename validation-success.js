 function validate(fds,institutionId,countryCodes){
  
   const retvalue = fds.map((item)=>{
     Object.keys(item).forEach((key)=>{
      item[key]={
         value: item[key],
         error: item[key] =='' ? 'Cannot be empty' : key =='Author'? '': 'some error message'
       }
     })
     return item;
   })

     const output = {
      hasError: true,
      data: retvalue
     }  
   return output
}
