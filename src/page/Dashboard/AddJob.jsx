import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow, FormSelect } from '../../components'
import { editJobs } from '../../features/products/jobSlice'
import {
  handleChange,
  clearInput,
  createJob,
} from '../../features/products/jobSlice'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company) {
      toast.error('Please fill out all fields')
      return
    }

    if (isEditing) {
      dispatch(
        editJobs({
          jobId: editJobId,
          job: { position, company, jobType, status },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobType, status }))
  }
  const handleJob = (e) => {
    const name = e.target.name
    console.log(name)
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJob}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJob}
          />
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJob}
          />
          <FormSelect
            name='jobType'
            labelText='Job Type'
            value={jobType}
            handleChange={handleJob}
            list={jobTypeOptions}
          />
          <FormSelect
            name='status'
            labelText='Job Status'
            value={status}
            handleChange={handleJob}
            list={statusOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => {
                dispatch(clearInput())
              }}
            >
              Clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              disabled={isLoading}
              onSubmit={handleSubmit}
            >
              {isEditing ? 'Edit' : 'Add Job'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
