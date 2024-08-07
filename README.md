# React-Nepali-Datepicker

> A React DatePicker for Nepali Dates(BS)

[![NPM](https://img.shields.io/npm/v/@dppoudel/reactjs-nepalidate-picker)](https://www.npmjs.com/package/dppoudel/reactjs-nepalidate-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @dppoudel/reactjs-nepalidate-picker
```

[Demo](https://dppoudel.github.io/reactjs-nepalidate-picker/)
![Image description](https://i.imgur.com/h5kzBJ3.png)

## Usage

```tsx
import React, { Component } from 'react'

import DatePicker from '@dppoudel/reactjs-nepalidate-picker'
import '@dppoudel/reactjs-nepalidate-picker/dist/index.css'

class Example extends Component {
  defaultDate = '2077-04-12' //default date must be in YYYY-MM-DD format
  dateChange = (d) => {
    console.log(d)
    /** {"bsYear":2077,
     * "bsMonth":2,
     * "bsDate":15,"weekDay":5,
     * "formattedDate":"२०७७ जेठ, १५",
     * "adDate":"2020-05-27T18:15:00.000Z",
     * "bsMonthFirstAdDate":"2020-05-13T18:15:00.000Z",
     * "bsMonthDays":32}
     **/
  }
  render() {
    return (
      <DatePicker
        dateFormat={'%y %M, %d'}
        onDateChange={(date) => dateChange(date)}
        placeholderText='From Date' //optional
        selectedDefaultDate={defaultDate} //optional
        fromDate={'2077-03-11'} //optional;  if one need to set start date range; should be in YYYY-MM-DD format
        toDate={'2077-03-29'} //optional; if one need to set end date range; should be in YYYY-MM-DD format
      />
    )
  }
}
```

## License

MIT © [dppoudel](https://github.com/dppoudel)
