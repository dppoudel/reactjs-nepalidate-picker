import React from 'react'
import DatePicker from '@dppoudel/reactjs-nepalidate-picker'
import '@dppoudel/reactjs-nepalidate-picker/dist/index.css'
import './index.css'
const Picker = ({ setDateDetails, set }) => {
  console.log('datepicker rendering....')
  return (
    <DatePicker
      placeholderText='From Date'
      dateFormat={'%y %M, %d'}
      onDateChange={(date) => set(date)}
      selectedDefaultDate={''}
      // fromDate={'2077-03-11'}
      // toDate={'2077-03-29'}
    />
  )
}
export default React.memo(Picker)
