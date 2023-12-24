import Parse from "parse"
import { parseResultObject } from "./utils"

export const signUp = async ({
  email,
  password,
  phone,
  firstName,
  lastName,
}: any) => {
  const user = new Parse.User()
  user.set("username", email)
  user.set("password", password)
  user.set("email", email)

  user.set("phone", phone)
  user.set("firstName", firstName)
  user.set("lastName", lastName)

  const res = await user.signUp()
  return parseResultObject(res)
}

export const logIn = async ({ username, passowrd }: any) => {
  const res = await Parse.User.logIn(username, passowrd)
  return parseResultObject(res)
}

export const resetPassword = async ({ email }: any) => {
  const res = await Parse.User.requestPasswordReset(email)
  return parseResultObject(res)
}
