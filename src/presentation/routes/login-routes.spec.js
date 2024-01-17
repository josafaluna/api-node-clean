class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.email) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  // pode ser utilizado tanto o "tes" como o "it"
  it('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})

// 1 - a classe LoginRouter, método route, não retorna o status code 400, caso o e-mail não seja passado
// 2 - incluir no método route do LoginRouter, a validação do email, se não tiver, retornar um erro 400
