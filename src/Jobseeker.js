import React, { useState } from 'react';

const Jobseeker = () => {
  return (
    
      <section className='jobseeker'>
    <div className='bg'>
<div className='jobseeker-content'>
<div className='jobkeeper-form'>
<h2 className='form-tiitle'>Jobseeker</h2>
<form className='jobseeker-form' id='jobseeker-form'>
<div className='form-group'>
    <label htmlFor='name'>
    <i class="zmdi zmdi-account material-icons-name"></i>
    <input type="text" name='name' id='name' autoComplete='off' className='inputText' placeholder='Enter your Name'></input>
    </label>
</div>

<div className='form-group'>
    <label htmlFor='CNIC'>
    <i class="zmdi zmdi-card"></i>
    <input type="text" name='name' id='name' autoComplete='off' className='inputText' placeholder='Enter your CNIC'></input>
    </label>
</div>

<div className='form-group'>
    <label htmlFor='Contact No'>
    <i class="zmdi zmdi-phone"></i>
    <input type="text" name='name' id='name' autoComplete='off' className='inputText' placeholder='Enter your Contact Number'></input>
    </label>
</div>


<div className='form-group'>
    <label htmlFor='E-mail'>
    <i class="zmdi zmdi-account material-icons-name"></i>
    <input type="text" name='name' id='name' autoComplete='off' className='inputText' placeholder='Enter your E-mail'></input>
    </label>
</div>


<div className='form-group'>
    <label htmlFor='Experience'>
    <i class="zmdi zmdi-wrench"></i>
    <b>Experience :</b>
    </label>
    <input type="radio" name="Experience"/>

    <label > Beginner</label>
<input type="radio" name="Experience"/>

<label>Medium</label>


<input type="radio" name="Experience"/>

<label>Expert</label>



</div>


<div className='form-group'>
    <label htmlFor='Education'>
    <i class="zmdi zmdi-graduation-cap" ></i>
   <b> Education </b> :
    </label>
    <input type="radio" name="Education"/>

    <label > Primary</label>
<input type="radio" name="Education"/>

<label>Secondary</label>


<input type="radio" name="Education"/>

<label>Graduation</label>


</div>

<div>
    <h2>
       Upload file 
    </h2>   

    <input type="file" name='file' />
  
   


</div>


<div className='form-group form-button'>
<input type="submit" name="submit-data" id='submit-data' className='form-submit' value="Submit-Data" />
</div>

<div>




</div>


</form>


</div>

</div>
    </div>
    </section>
   
  )
}

export default Jobseeker;