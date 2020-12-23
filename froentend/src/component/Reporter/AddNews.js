import React, { useState } from 'react'
import NewsDataService from '../../services/NewsService/NewsService'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Box, Button, FormField, TextInput, Heading } from 'grommet'
import { setLog } from '../../action/action'

export function AddNews() {
  const initialNewsState = {
    id: '',
    NewsTitle: '',
    News: '',
    City: '',
    Image: '',
  }

  let user = sessionStorage.getItem('user')
  let u = JSON.parse(user)

  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('')
  const [val, setVal] = useState('')
  const [news, setNews] = useState(initialNewsState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNews({ ...news, [name]: value })
  }

  const handleOnChange = (event, editor) => {
    const data = editor.getData()
    setVal(data)
  }

  const onChange = (event) => {
    setFile(event.target.files[0])
    setFilename(event.target.files[0].name)
  }

  const saveNews = async (event) => {
    event.preventDefault()
    let formdata = new FormData()

    formdata.append('NewsTitle', news.NewsTitle)
    formdata.append('News', val)
    formdata.append('City', news.City)
    formdata.append('Image', filename)
    formdata.append('file', file)
    formdata.append('Rid', u.id)

    await NewsDataService.create(formdata)
      .then((response) => {
        setNews({
          id: response.data.id,
          NewsTitle: response.data.NewsTitle,
          News: response.data.News,
          City: response.data.City,
          Image: response.data.Image,
        })

        setSubmitted(true)
      })
      .catch((e) => {
        //log('Error')
        //log(e)
      })
  }

  const addMoreNews = (event) => {
    setNews(initialNewsState)
    setSubmitted(false)
  }

  return (
    <Box align='center'>
      {submitted ? (
        <Box align='center'>
          <Heading>Hi !!! Posted SuccessFully</Heading>
          <Button primary onClick={addMoreNews} label='Post News'></Button>
        </Box>
      ) : (
        <Box background='light-2' width='large'>
          <Heading alignSelf='center'>Post Today's Top News</Heading>

          <FormField name='NewsTitle' htmlfor='text-input-id' required>
            <TextInput
              type='text'
              name='NewsTitle'
              value={news.NewsTitle}
              onChange={handleInputChange}
              placeholder='News Title'
              required
            />
          </FormField>

          <Box>
            {' '}
            <CKEditor
              name='News'
              className='form-control'
              y
              editor={ClassicEditor}
              value={news.News}
              onChange={handleOnChange}
            />
          </Box>

          <FormField name='City' htmlfor='text-input-id' required>
            <TextInput
              type='text'
              name='City'
              value={news.City}
              onChange={handleInputChange}
              placeholder='City'
              required
            />
          </FormField>
          <FormField name='Image' htmlfor='text-input-id' required>
            <TextInput type='file' name='Image' onChange={onChange} />
          </FormField>

          <Button
            primary
            label='Post'
            onClick={(event) => saveNews(event)}
          ></Button>
        </Box>
      )}
    </Box>
  )
}

export default AddNews
