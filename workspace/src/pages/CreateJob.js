import React from 'react'
import Select from 'react-select'
import Button from '../components/Button'

function CreateJob(){
    let skills = 
    [
      {  label: "Construction", value: "Construction" },
      {  label: "Plumbing", value: "Plumbing" },
      {  label: "Electrical", value: "Electrical" },
      {  label: "Mechanical", value: "Mechanical" },
      {  label: "Home", value: "Home" },
      {  label: "Logging", value: "Logging" },
      {  label: "Technical", value: "Technical" },
      {  label: "Roof", value: "Roof" },
    ]
    return(
        <div className='container'>
          <div className='form-control'>
            <label>Job Name</label>
            <input type='text' placeholder='Enter the job name'
            
            />
          </div>

          <div className='form-control'>
            <label>Payment</label>
            <input type='number' placeholder='Enter payment amount'
              
            />
          </div>

          <div className='form-control'>
            <label>Description</label>
            <form>
              <textarea type='text'
                placeholder='Enter a description (optional)'
                maxLength="200"
                rows={5}
              />
            </form>
            </div>

            <div className='form-control'>
            <label>Tags</label>
            <Select
              isMulti
              name="colors"
              options={skills}
              className="basic-multi-select"
              classNamePrefix="select"


            />
            </div>
            <Button text='Submit'></Button>
        </div>
    );
}

export default CreateJob;