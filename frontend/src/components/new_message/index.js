import React from 'react';
//import { Formik } from 'formik';


const NewMessageForm = ({onNewMessage = f => f}) => {
  let title, content
  const submit = e => {
      e.preventDefault()
      onNewMessage(_title.value, _content.value)
      title.value = ''
      content.value = ''
      title.focus()
  }

  return (
      <form onSubmit={submit}>
          <input  ref={input => title = input}
                  type="text"
                  placeholder="Title..." required />
          <input  ref={input => content = input}
                  type="text"
                  placeholder="Content..." required />
          <button>Add List</button>
      </form>
  )
}

export default NewMessageForm;