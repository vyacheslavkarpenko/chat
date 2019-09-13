sendNewMessage(title, excerpt) {
  axios.post( '/api/v1/lists', { list: {title, excerpt} })
  .then(response => {
      console.log(response)
      const lists = [ ...this.state.lists, response.data ]
      this.setState({lists})
  })
  .catch(error => {
      console.log(error)
  })
}
