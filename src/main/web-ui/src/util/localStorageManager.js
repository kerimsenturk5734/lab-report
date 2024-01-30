import {UserDto} from "../domain/dto/UserDto";
import {Token} from "../domain/payload/response/UserLoginResponse";
import {jsonBeautifier} from "./JsonBeautifier";

export const LocalStorageManager = {
    loadUser: () : UserDto => {return JSON.parse(localStorage.getItem(StorageItem.USER))},
    loadToken:() : Token => {return JSON.parse(localStorage.getItem(StorageItem.TOKEN))},
    removeUser:() : void => {localStorage.removeItem(StorageItem.USER)},
    removeToken:() : void => {localStorage.removeItem(StorageItem.TOKEN)},
    setUser:(user : UserDto ) : void => {localStorage.setItem(StorageItem.USER, jsonBeautifier.beautifyLocalItem(user))},
    setToken:(token : Token ) : void => {localStorage.setItem(StorageItem.TOKEN, jsonBeautifier.beautifyLocalItem(token))},
}
const StorageItem = {
    USER : 'user',
    TOKEN : 'token'
}