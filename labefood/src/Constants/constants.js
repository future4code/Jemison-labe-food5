export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB'

export const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5xaGJpbWR4NGZmQ3BTaElJWElKIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6InJ1YSBhc3Ryb2RldiwgMTAsIDEgLSBDZW50cm8iLCJpYXQiOjE2NjM3OTM0NDl9.dVO1rCtdZwlxYsONxnCbOaby8mJnQ4jLMYunzYxEtGE'

export const validateEmail = (email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email))
export const validatePassword = (password => /.{6,}/.test(password))
export const validateCPF = (cpf => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf))
export const validateName = (name => /.{2,}/.test(name))
export const validateStreet = (street => /.{2,}/.test(street))
export const validateNumber = (number => /.{2,}/.test(number))
export const validateComplement = (complement => /.{2,}/.test(complement))
export const validateNeighbourhood = (neighbourhood=> /.{2,}/.test(neighbourhood))
export const validateCity = (city => /.{2,}/.test(city))
export const validateState = (state => /.{2,}/.test(state))
export const token = localStorage.getItem("token")